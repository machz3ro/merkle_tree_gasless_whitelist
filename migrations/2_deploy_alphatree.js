const AlphaTree = artifacts.require("./alphatree");

module.exports = async function (deployer) {
    const accounts = await web3.eth.getAccounts()
    deployer.deploy(AlphaTree, "APT");
};