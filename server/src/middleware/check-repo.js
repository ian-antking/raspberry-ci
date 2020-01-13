const fs = require('fs')
const runCommand = require('../utils/run-command');
const resolveProjectsPath = require('../utils/resolve-projects-path');
const resolveRepoPath = require('../utils/resolve-repo-path');
const resolveRepoUrl = require('../utils/resolve-repo-url');

const checkRepo = (req, res, next) => {
    req.repoName = req.body.repository.full_name;
    req.projectsPath = resolveProjectsPath();
    req.repoPath = resolveRepoPath(req.projectsPath, req.repoName);
    req.repoUrl = resolveRepoUrl(req.repoName);
    req.actions = {};

    if (fs.existsSync(req.repo)) {
        next();
    } else {
        req.actions.clone = true;
        next();
    }
}

module.exports = checkRepo;

