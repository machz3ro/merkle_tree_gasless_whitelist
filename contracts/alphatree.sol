// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract AlphaTree is ERC721, Ownable {
    using Counters for Counters.Counter;
    bytes32 public root = 0x2c6bcf8d37c1a069c5fb0251c5d5bca62124fb4528327d969973b691ad9fb564;

    Counters.Counter private _tokenIdCounter;

    constructor(bytes32 _root) ERC721 ("Alpha Tree", "APT") {
        root = _root;
    }

    function safeMint(address to, bytes32[] memory proof) public {
        require(isValid(proof, keccak256(abi.encodePacked(msg.sender))), "Not on Allowlist");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function isValid(bytes32[] memory proof, bytes32 leaf) public view returns(bool) {
        return MerkleProof.verify(proof, root, leaf);
    }
}