const fs = require('fs')
const resolveProjectsPath = () => {
    return fs.existsSync('/.dockerenv') ? '/app/projects/' : `${process.env.PROJECT_PATH}`;
}

module.exports = resolveProjectsPath;
