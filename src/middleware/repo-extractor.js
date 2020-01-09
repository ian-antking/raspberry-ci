const repoExtractor = (req, _, next) => {
    req.repo = `/app/${req.body.repository.full_name}`;
    next();
}

module.exports = repoExtractor;
