const Block = require('./models/Block');
const Transaction = require('./models/Transaction');
const Blockchain = require ('./models/Blockchain');

//Genesis Block Creation
let genesisBlock = new Block();
let blockchain = new Blockchain(genesisBlock);

//create Tranasctions

let transaction = new Transaction("Bhavye","Charu",69);
let block = blockchain.getNextBlock([transaction])
blockchain.addBlock(block);
let anotherTransaction = new Transaction("Ajju","Paras",10);
let block1 = blockchain.getNextBlock([anotherTransaction,trasnaction]);
blockchain.addBlock(block1);

console.log(blockchain)