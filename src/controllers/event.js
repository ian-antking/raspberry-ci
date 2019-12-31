const exec = require('child_process').exec;

const execCallback = (error, stdout, stderr) => {
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);
    if (error) console.log(error);
}

exports.handleEvent = (req, res) => {
    exec(`cd ${process.env.PROJECT_PATH} && git pull`, execCallback)
    res.status(200).json({ message: req.body.message });
}
