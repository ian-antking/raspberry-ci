const exec = require('child_process').exec;

const execCallback = (error, stdout, stderr) => {
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);
    if (error) console.log(error);
}

exports.handleEvent = (req, res) => {
    console.log('Pulling code from github...');
    exec(`git -C ${process.env.PROJECT_PATH} reset --hard`, execCallback);
    exec(`git -C ${process.env.PROJECT_PATH} clean -df`, execCallback);
    exec(`git -C ${process.env.PROJECT_PATH} pull -f`, execCallback);
    res.status(200).json({ message: req.body.message });
}
