const resolveRepoPath = (repoName) => {
    const projectName = repoName.split('/')[1];
    const projectsPath = process.env.DOCKER ? '/app/' : `${process.env.PROJECT_PATH}`;

    return `${projectsPath}/${projectName}`;
}

module.exports = resolveRepoPath;
