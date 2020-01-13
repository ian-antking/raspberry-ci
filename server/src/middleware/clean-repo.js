const runCommand = require('../utils/run-command');

const cleanRepo = (req, res, next) => {
    const repo = req.repo;
    runCommand(`git -C ${repo} clean -df`, res, next);
};

module.exports = cleanRepo;