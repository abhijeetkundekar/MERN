const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    // Get Token from request header
    const token = req.headers.authorization.split(" ")[1];

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.body = {};
    req.body.userId = verifiedToken.userId;

    next();
  } catch (err) {
    res.status(401).send({ success: false, message: "Token Invalid" });
  }
};

module.exports = auth;