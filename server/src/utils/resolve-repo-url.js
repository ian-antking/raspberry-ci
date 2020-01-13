const resolveRepoUrl = (repo) => {
    return `${process.env.GIT_SERVER}${repo}.git`;
}

module.exports = resolveRepoUrl;
