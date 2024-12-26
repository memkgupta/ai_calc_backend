import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  // Retrieve token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token
    const secretKey = process.env.JWT_SECRET; 
    const decoded = jwt.verify(token, secretKey);

    // Attach user information to the request
    req.user = decoded;

    next(); // Call the next middleware or route handler
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

export default authenticateToken;
