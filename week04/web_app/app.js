// Web3.js library is included directly via <script> tag in HTML file

const Web3 = require('web3');

// Initialize Web3 with your Ethereum provider (e.g., MetaMask)
const web3 = new Web3('http://127.0.0.1:8545');

// Contract address and ABI
const contractAddress = '0xCb6EF1a651fE78d379dA08862d10203697b18c75';
const contractABI = [
    [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                }
            ],
            "name": "add",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                }
            ],
            "name": "divide",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                }
            ],
            "name": "multiply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                }
            ],
            "name": "subtract",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ]
];

// Load the contract
const calculatorContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to perform a calculation
async function performCalculation(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    try {
        // Perform the calculation based on the selected operation
        let result;
        if (operation === 'add') {
            result = await calculatorContract.methods.add(num1, num2).call();
        } else if (operation === 'subtract') {
            result = await calculatorContract.methods.subtract(num1, num2).call();
        } else if (operation === 'multiply') {
            result = await calculatorContract.methods.multiply(num1, num2).call();
        } else if (operation === 'divide') {
            result = await calculatorContract.methods.divide(num1, num2).call();
        }

        // Display the result
        document.getElementById('result').textContent = result;
    } catch (error) {
        console.error(error);
        alert('Error: Could not perform the calculation.');
    }
}

// Event listeners for calculation buttons
document.getElementById('addBtn').addEventListener('click', () => performCalculation('add'));
document.getElementById('subtractBtn').addEventListener('click', () => performCalculation('subtract'));
document.getElementById('multiplyBtn').addEventListener('click', () => performCalculation('multiply'));
document.getElementById('divideBtn').addEventListener('click', () => performCalculation('divide'));
