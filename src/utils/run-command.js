const exec = require('child_process').exec;

const runCommand = (command, res) => {
    const execCallback = (error, stdout, stderr) => {
        if (error) {
            res.status(500).json({ error: stderr })
        };
        if (stderr) {
            res.status(500).json({ error: stderr });
        };
        if (stdout) {
            res.status(201).json({ message: stdout });
        };
    }

    exec(command, execCallback);
}

module.exports = runCommand;
