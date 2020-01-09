const resolveProjectsPath = () => {
    return projectsPath = process.env.DOCKER ? '/app' : `${process.env.PROJECT_PATH}`;
}

module.exports = resolveProjectsPath;
