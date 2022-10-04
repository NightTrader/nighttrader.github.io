// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.7.0;

interface IERC20 {

    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);


    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}


contract OTC {
    address public minter;
    address public tokenAddress;
    address public spender;
    address[5] public destinations;
    uint256 public locktime;
    uint256 public islocked;
    uint256 public delay;
    constructor() public {
        minter = msg.sender;
        tokenAddress = address(0x6B175474E89094C44Da98b954EedeAC495271d0F);
        delay = 15552000;
        locktime = block.timestamp;
        islocked = 0;
    }
    function changeERCToken(address newaddress) public returns (bool) {
        require(msg.sender == minter);
        require(islocked == 0);
        tokenAddress = newaddress;
        return true;
    }
    function changeSpender(address newaddress) public returns (bool) {
        require(msg.sender == minter);
        require(islocked == 0);
        spender = newaddress;
        return true;
    }
    function changeDestination(address newaddress, uint index) public returns (bool) {
        require(msg.sender == minter);
        require(islocked == 0);
        destinations[index] = newaddress;
        return true;
    }
    function moveFunds(address to, uint amount) public returns (bool) {
        require(msg.sender == minter || msg.sender == spender);
        if (msg.sender == minter) {
            require(islocked == 0);
        }
        uint x = 0;
        bool found = false;
        while (x < 5) {
            if (to == destinations[x]) {
                found = true;
                break;
            }
            x+=1;
        }
        require(found);
        IERC20(tokenAddress).transfer(to, amount);
        return true;
    }
    function lock() public returns (bool) {
        require(msg.sender == minter);
        locktime = block.timestamp;
        islocked = 1;
        return true;
    }
    function unlock() public returns (bool) {
        require(msg.sender == minter || msg.sender == spender);
        if (msg.sender == minter) {
            if (locktime + delay > block.timestamp) {
                return false;
            }
        }
        locktime = block.timestamp;
        islocked = 0;
        return true;
    }
}