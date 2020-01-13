const runCommand = require('../utils/run-command');

exports.handleEvent = (req, res) => {

    if(req.actions.clone) {
        const command = `git -C ${req.projectsPath} clone ${req.repoUrl}`
        runCommand(command, res);
    }
}
