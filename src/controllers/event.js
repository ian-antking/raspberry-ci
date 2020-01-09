const runCommand = require('../utils/run-command');

exports.handleEvent = (req, res) => {
    const repo = req.repo;

    console.log('Pulling code from github...');
    if (process.env.NODE_ENV === 'development') {
        runCommand(`echo Pulling code in ${repo}`, res);
    } else {
        runCommand(`
        git -C ${repo} clean -df &&
        git -C ${repo} pull -f
        `, res
    );
    }
}
