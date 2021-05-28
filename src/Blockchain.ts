import Block from './block'

export default class CryptoBlockchain {

   Blockchain: Block[]

   constructor() {
      this.Blockchain = [this.createGenesisBlock()];
   }

   createGenesisBlock() {
    const genesisDate = '29/05/2021';
    return new Block( 0,'Genesis Block', genesisDate)
   }
   
   getLastBlock () {
      return this.Blockchain[this.Blockchain.length -1];
   }

   addNewBlock(newBlock) {
      newBlock.index = this.getLastBlock().Index + 1;
   }
}