const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/app/build_contracts"),
  develop: {
    host: "127.0.0.1",
    port: "9545",
    network_id: "*", // match any network
    websockets: true,
  },
};
