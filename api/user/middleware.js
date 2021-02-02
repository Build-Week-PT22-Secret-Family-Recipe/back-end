const jwt = require("jsonwebtoken");

function restricted() {
    return async (req, res, next) => {
        
        const authError = {
            Message: "Invalid credentials"
        }
        
        try {
            const token = req.headers.authorization;
            // const token = req.cookies.token;
            if (!token) {
                return res.status(401).json(authError)
            }
            
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json(authError)
                }
                req.token = decoded;
                next();
            })
        } catch (err) {
            next(err);
        }
        
    }
    
}
module.exports = {
    restricted
}