const crypto = require('crypto');

const auth = (req, res, next) => {
    const sha = crypto
    .createHmac('sha1', process.env.SECRET)
    .update(req.body.toString())
    .digest('hex');
    const sig = `sha1=${sha}`
    
    if (req.headers['x-hub-signature'] !== sig) {
        res.status(401).json({ error: 'permission denied' })
    }
    next();
}

module.exports = auth;
