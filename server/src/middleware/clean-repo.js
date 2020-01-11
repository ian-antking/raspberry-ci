const runCommand = require('../utils/run-command');

const cleanRepo = (req, res, next) => {
    const repo = req.repo;

    if (req.freshClone) {
        next();
    } else if (req.body.dryRun) {
        runCommand(`echo cleaning repo ${repo}`, res, next);
    } else {
        runCommand(`git -C ${repo} clean -df`, res, next);
    }
};

module.exports = cleanRepo;