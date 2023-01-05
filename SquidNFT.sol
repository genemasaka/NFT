// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SquidNFT is ERC721 {
    constructor () ERC721("SquidNFT", "SQD") {
        _mint(msg.sender, 1);
    }
}