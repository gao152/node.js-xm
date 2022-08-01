const { User } = require("../database/database.js");
function getUserInfoByUsername(username, password) {
  if (User[username] && User[username].password === password) {
    return User[username];
  }
  return null;
}

module.exports = {
  getUserInfoByUsername,
};
