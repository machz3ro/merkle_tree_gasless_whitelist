const AlphaTree = artifacts.require('AlphaTree');

module.exports = (deployer,) => {
    deployer.deploy(AlphaTree,'AlphaTree','APT');
};