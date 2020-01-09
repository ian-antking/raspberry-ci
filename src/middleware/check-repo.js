const fs = require('fs')
const exec = require('child_process').exec;
const resolveProjectsPath = require('../utils/resolve-projects-path');
const resolveRepoUrl = require('../utils/resolve-repo-url');

const checkRepo = (req, res, next) => {
    const repoName = req.body.repository.full_name;
    const projectsPath = resolveProjectsPath();
    const repoUrl = resolveRepoUrl(repoName)
    req.repo = `${projectsPath}/${repoName}`;

    const execCallback = (error, stdout, stderr) => {
        if (stdout) {
            res.status(200).json({ message: stdout });
        };
        if (stderr) {
            res.status(500).json({ error: stderr });
        };
        if (error) {
            res.status(500).json({ error: stderr })
        };
    }

    if (fs.existsSync(req.repo)) {
        req.localRepoExists = true;
        next();
    }
    exec(`git -C ${projectsPath} clone ${repoUrl}`, execCallback);
}

module.exports = checkRepo;

