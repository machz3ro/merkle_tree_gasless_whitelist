const alphatree = artifacts.require("AlphaTree");

module.exports = (deployer,) => {
    deployer.deploy(alphatree, "AlphaTree");
};