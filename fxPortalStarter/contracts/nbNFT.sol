
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract nbNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("NewBal", "NB") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmS6pFYk8e9khuWhTgcWLHAriFjHFmGa6NsLjDA5rexv5Y/";
    }

    function promptDescription() external pure returns (string memory) {
        return "NB: generate different popular New Balance";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}