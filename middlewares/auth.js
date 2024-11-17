const jwt = require('jsonwebtoken');

// Middleware для проверки аутентификации токена
exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader ? authHeader.split(' ')[1] : null;

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: Token Missing' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token Invalid or Expired' });
        }
        req.user = user; 
        next();
    });
};

// Middleware для проверки роли администратора
exports.isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied: Admins Only' });
    }
    next();
};

// Middleware для проверки роли редактора
exports.isEditor = (req, res, next) => {
    if (req.user.role !== 'editor' && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied: Editors Only' });
    }
    next();
};

// Дополнительная проверка аутентификации токена с логированием
exports.authenticateTokenWithLogging = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Received Authorization Header:', authHeader);

    if (!authHeader) {
        return res.status(401).json({ message: 'Access Denied: Authorization Header Missing' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access Denied: Token Not Provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token Verification Failed' });
        }
        req.user = user;
        next();
    });
};
