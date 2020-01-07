const exec = require('child_process').exec;

exports.handleEvent = (req, res) => {
    const repo = `/app/${req.body.repository.full_name}`
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
            git -C ${repo} reset --hard &&
            git -C ${repo} clean -df &&
            git -C ${repo} pull -f
            `, execCallback
        );
}
