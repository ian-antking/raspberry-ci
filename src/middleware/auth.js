const crypto = require('crypto');

const auth = (res, req, next) => {
    next();
}

module.exports = auth;
