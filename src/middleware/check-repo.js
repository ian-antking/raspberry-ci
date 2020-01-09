const fs = require('fs')
const resolveProjectPath = require('../utils/resolve-project-path');

const checkRepo = (req, _, next) => {
    const directoryPath = resolveProjectPath();
    req.repo = `${directoryPath}/${req.body.repository.full_name}`;

    if (fs.existsSync(req.repo)) {
        req.localRepoExists = true;
        next();
    }
    console.log(`pull ${req.repo}`);
    next();
}

module.exports = checkRepo;

