const runCommand = require('../utils/run-command');

const resetRepo = (req, res, next) => {
    console.log('reseting');
    const repo = req.repo;
    runCommand(`git -C ${repo} reset --hard`, res, next);
};

module.exports = resetRepo;