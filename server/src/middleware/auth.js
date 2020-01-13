const crypto = require('crypto');

const auth = (req, res, next) => {
   console.log(req.body.toString());
    const sha = crypto
        .createHmac('sha1', process.env.SECRET)
        .update(JSON.stringify(req.body))
        .digest('hex');
    const sig = `sha1=${sha}`

    console.log(sig);

    if (req.headers['x-hub-signature'] !== sig) {
        res.status(401).json({ error: 'permission denied' })
    } else {
        next();
    }
}

module.exports = auth;
