const exec = require('child_process').exec;

exports.handleEvent = (_, res) => {
    const execCallback = (error, stdout, stderr) => {
        if (stdout) {
            res.status(200).json({ message: "code successfully integrated" });
            console.log(stdout);
        };
        if (stderr) {
            console.log(stderr)
            res.status(500).json({ error: stderr });
        };
        if (error) {
            console.log(error);
            res.status(500).json({ error: stderr })
        };
    }

    console.log('Pulling code from github...');
    exec(`
            git -C ${process.env.PROJECT_PATH} reset --hard &&
            git -C ${process.env.PROJECT_PATH} clean -df &&
            git -C ${process.env.PROJECT_PATH} pull -f
            `, execCallback
        );
}
