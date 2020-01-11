const runCommand = require('../utils/run-command');

exports.handleEvent = (req, res) => {
    const repo = req.repo;

    if (req.body.dryRun) {
        runCommand(`echo Pulling code in ${repo}`, res);
    } else {
        runCommand(`git -C ${repo} pull -f`, res);
    }
}
