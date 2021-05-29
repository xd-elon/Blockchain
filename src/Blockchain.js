const Block = require('./block') 

 class CryptoBlockchain {

   constructor() {
      this.chain = [this.createGenesisBlock()];
      this.difficulty = 4;
   }

   createGenesisBlock() {
    const genesisDate = '28/05/2021';
    return new Block(0, 'Genesis Block', genesisDate, '0')
   }
   
   getLastBlock () {
      return this.chain[this.chain.length - 1];
   }

   addNewBlock(newBlock) {
      newBlock.previusHash = this.getLastBlock().hash;
      newBlock.index = this.getLastBlock().index + 1;
      newBlock.hash = newBlock.computeHash();
      newBlock.mineBlock(this.difficulty);
      this.chain.push(newBlock);
   }

   isChainValid() {
      const chain  = this.chain;

      for( let i = 0; i < chain.length; i++) {
         
         if(chain[i].hash !== chain[i].computeHash()) {
            console.log(`block ${i} has been corrupted`)
            return false;
         }

         if(i > 0 && chain[i].previusHash !== chain[i - 1].hash) {
            console.log(`block ${i - 1} has been corrupeted`);
            return false;
         }
      }

      console.log('chain is valid');
      return true;
   }
}

let blocksToAdd = 5;

const PolyChain = new CryptoBlockchain();

for ( i = 0; i < blocksToAdd; i++) {
   PolyChain.addNewBlock(new Block(0,{sender: 'polycode', receiver: 'youtube', message: `block ${PolyChain.chain.length} has been added to the chain`}));
}

PolyChain.chain.forEach((block) => {
   console.log(block);
})

