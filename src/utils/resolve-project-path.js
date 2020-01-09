const resolveProjectPath = () => {
    return process.env.DOCKER ? '/app/' : `${process.env.PROJECT_PATH}`;
}

module.exports = resolveProjectPath;
