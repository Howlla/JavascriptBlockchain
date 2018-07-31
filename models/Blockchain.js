const Block = require('./Block');
const SHA256 = require('js-sha256')

class Blockchain {
	constructor(genesisBlock){
	this.blocks = [];
	this.addBlock(genesisBlock);
	}

	addBlock(block){
		if(this.blocks.length == 0){
			block.prevHash = '0000000000';
			block.hash = this.generateHash(block);
		}
		this.blocks.push(block);
	}


	getNextBlock(transactions){
		let block = new Block();
		transactions.forEach( transaction =>{
			block.addTransaction(transaction);
		})
		let previousBlock = this.getPreviousBlock();
		block.index = this.blocks.length;
		block.prevHash = previousBlock.hash;
		block.hash = this.generateHash(block);
		return block;
	}

	generateHash(block){
		let hash = SHA256(block.key)
		while(!hash.startsWith("0000")){
			block.nonce += 1;
			hash= SHA256(block.key)
			console.log(hash)
		}
		return hash;
	}
	getPreviousBlock(){
		return this.blocks[this.blocks.length-1];
	}
}

module.exports = Blockchain;