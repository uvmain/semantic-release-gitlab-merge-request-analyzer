const verify = require("./src/verify");

let verified;

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
async function verifyConditions(pluginConfig, context) {
  await verify(pluginConfig, context);
  verified = true;
}

module.exports = { verifyConditions };