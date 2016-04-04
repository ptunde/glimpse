var Buffer = require("buffer")

class AuthService {
  login(creds, callback) {
    // encoding
    var buffer = new Buffer.Buffer(creds.username + ":" + creds.password);
    var encodedAuth = buffer.toString("base64");

    // request
    fetch("https://api.github.com/user", {
      headers: {
        "Authorization" : "Basic " + encodedAuth
      }
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }

      throw {
        badCredentials: response.status == 401,
        unknownError: response.status != 401
      }

      throw "Unknown error";
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return callback({success: true});
    })
    .catch((error) => {
      return callback(error);
    });
  }
}


module.exports = new AuthService();
