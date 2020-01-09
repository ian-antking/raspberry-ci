const fs = require('fs')
const runCommand = require('../utils/run-command');
const resolveProjectsPath = require('../utils/resolve-projects-path');
const resolveRepoPath = require('../utils/resolve-repo-path');
const resolveRepoUrl = require('../utils/resolve-repo-url');

const checkRepo = (req, res, next) => {
    const repoName = req.body.repository.full_name;
    const projectsPath = resolveProjectsPath();
    const repoPath = resolveRepoPath(projectsPath, repoName);
    const repoUrl = resolveRepoUrl(repoName)
    req.repo = repoPath;

    if (fs.existsSync(req.repo)) {
        req.localRepoExists = true;
        next();
    } else {
        runCommand(`git -C ${projectsPath} clone ${repoUrl}`, res);
    }
}

module.exports = checkRepo;

