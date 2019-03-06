const AuthService = {
  parseBasicToken(bearerToken) {
    return Buffer.from(bearerToken, "base64")
      .toString()
      .split(":");
  },
  getUserwithUserName(db, user_name) {
    return db("thingful_users")
      .where({ user_name })
      .first();
  }
};

module.exports = AuthService;
