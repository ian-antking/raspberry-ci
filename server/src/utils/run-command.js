const exec = require('child_process').exec;

const runCommand = (command, res) => {
    const errorResponse = (error, res) => {
        res.status(500).json({ error: error })
    }
    
    const stdErrResponse = (stderr, res) => {
        if (stderr.includes('warning')) {
            successResponse(stderr, res);
        } else {
            res.status(500).json({ error: stderr });
        }
    }
    
    const successResponse = (stdout, res) => {
        res.status(201).json({ message: stdout });
    }

    const execCallback = (error, stdout, stderr) => {
        if (error) {
            errorResponse(error, res);
        }
        if (stderr) {
            stdErrResponse(stderr, res);
        }
        if (stdout) {
            successResponse(stdout, res);
        }
    }

    exec(command, execCallback);
}

module.exports = runCommand;
