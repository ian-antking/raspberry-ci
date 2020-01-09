const extractRepo = (req, _, next) => {
    req.repo = `/app/${req.body.repository.full_name}`;
    next();
}

module.exports = extractRepo;

