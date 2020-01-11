const resolveRepoPath = (projectsPath, repoName) => {
    const projectName = repoName.split('/')[1];

    return `${projectsPath}/${projectName}`;
}

module.exports = resolveRepoPath;
