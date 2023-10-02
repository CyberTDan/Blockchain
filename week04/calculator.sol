// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    // Function to perform addition
    function add(uint256 x, uint256 y) public pure returns (uint256) {
        return x + y;
    }

    // Function to perform subtraction
    function subtract(uint256 x, uint256 y) public pure returns (uint256) {
        require(x >= y, "Subtraction result cannot be negative");
        return x - y;
    }

    // Function to perform multiplication
    function multiply(uint256 x, uint256 y) public pure returns (uint256) {
        return x * y;
    }

    // Function to perform division
    function divide(uint256 x, uint256 y) public pure returns (uint256) {
        require(y != 0, "Division by zero is not allowed");
        return x / y;
    }
}
