const exec = require('child_process').exec;

const runCommand = (command, res) => {
    const execCallback = (error, stdout, stderr) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: stderr })
        };
        if (stderr) {
            console.log(stderr)
            res.status(500).json({ error: stderr });
        };
        if (stdout) {
            res.status(200).json({ message: stdout });
            console.log(stdout);
        };
    }

    exec(command, execCallback);
}

module.exports = runCommand;
