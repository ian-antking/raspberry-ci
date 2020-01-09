const exec = require('child_process').exec;

const resetRepo = (req, res, next) => {
    if (req.localRepoExists) {
        next();
    }

    const execCallback = (error, stdout, stderr) => {
        if (stdout) {
            console.log(stdout);
            next();
        };
        if (stderr) {
            console.log(stderr)
            res.status(500).json({ error: stderr });
        };
        if (error) {
            console.log(error);
            res.status(500).json({ error: error })
        };
    }

    const repo = req.repo;
    if (process.env.NODE_ENV === 'development') {
        exec(`echo hard reset ${repo}`, execCallback);
    } else {
        exec(`git -C ${repo} reset --hard`, execCallback);
    }
};

module.exports = resetRepo;