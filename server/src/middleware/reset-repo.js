const runCommand = require('../utils/run-command');

const resetRepo = (req, res, next) => {
    console.log('reseting');
    const repo = req.repo;

    if (req.freshClone) {
        next();
    } else if (req.body.dryRun) {
        runCommand(`echo hard reset ${repo}`, res, next);
    } else {
        runCommand(`git -C ${repo} reset --hard`, res, next);
    }
};

module.exports = resetRepo;