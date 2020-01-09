const fs = require('fs')

const checkRepo = (req, _, next) => {
    req.repo = `/app/${req.body.repository.full_name}`;

    if (fs.existsSync(req.repo)) {
        req.localRepoExists = true;
        next();
    } else {
        console.log(`pull ${req.repo}`);
        next();
    }
}

module.exports = checkRepo;

