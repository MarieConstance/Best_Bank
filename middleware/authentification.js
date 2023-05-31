const User = require("../modele/utilisateur");

const jwt = require("jsonwebtoken");

const authentification = async (req, res, next) => {
  try {
    const authoken = req.headers.authorization.split(' ')[1]

    const decodedToken = jwt.verify(authoken, "foo");
    const user = await User.findOne({
      _id: decodedToken._id,
      "authokens.authoken": authoken,
    });
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    res.redirect("/connexion");
  }
};

module.exports = authentification;
