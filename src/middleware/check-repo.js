const fs = require('fs')
const runCommand = require('../utils/run-command');
const resolveRepoPath = require('../utils/resolve-repo-path');
const resolveRepoUrl = require('../utils/resolve-repo-url');

const checkRepo = (req, res, next) => {
    const repoName = req.body.repository.full_name;
    const projectsPath = resolveRepoPath(repoName);
    const repoUrl = resolveRepoUrl(repoName)
    req.repo = projectsPath;

    if (fs.existsSync(req.repo)) {
        req.localRepoExists = true;
        next();
    }
    runCommand(`git -C ${projectsPath} clone ${repoUrl}`, res);
}

module.exports = checkRepo;

