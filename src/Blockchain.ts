import CryptoBlock from './block'
import BlockService from '../Services/block.service'

export default class CryptoBlockchain {

   Blockchain: CryptoBlock[]
   Difficulty: number

   constructor(difficulty: number) {

      // SET PROPERTIES
      this.getBlockchain();    
      this.Difficulty = difficulty
   }

   getBlockchain = async () => {

      var blockchain = await BlockService.getBlocks()

      if(blockchain.length == 0)
         this.Blockchain = await this.startGenesisBlock()
      else
         this.Blockchain = blockchain
   }

   startGenesisBlock = async (): Promise<CryptoBlock[]> => {
      
      // CREATE GENESIS
      var genesisBlock = new CryptoBlock(0, "Genesis Block", "0")
      genesisBlock.Timestamp = new Date('2020-01-01 00:00:00.000Z')

      // ADD BLOCK TO DATABASE
      BlockService.addBlock(genesisBlock)

      // RESULT
      return [genesisBlock]
   }

   obtainLatestBlock = async (): Promise<CryptoBlock> => {
      return await BlockService.getLastBlock()
   }

   addBlock = async (data: string) => {

      // GET LAST BLOCK
      let lastBlock = await this.obtainLatestBlock()

      // GENERATE NEW BLOCK
      let newBlock = new CryptoBlock(lastBlock.Index + 1, data, lastBlock.Hash)    
      
      var before = new Date();
      newBlock.proofOfWork(this.Difficulty)
      var after = new Date();
      newBlock.Duration = this.diff_minutes(after, before);

      // ADD BLOCK TO THE CHAIN
      this.Blockchain.push(newBlock)

      // ADD BLOCK TO DATABASE
      BlockService.addBlock(newBlock)
   }

   checkChainValidity = (blockchain: CryptoBlock[]): boolean => {
      for (let i = 1; i < blockchain.length; i++) {

         const currentBlock = blockchain[i];
         const precedingBlock = blockchain[i - 1];

         if (currentBlock.Hash !== currentBlock.computeHash()) return false;
         if (currentBlock.PreviousHash !== precedingBlock.Hash) return false;
      }
      return true;
   }

   monitor = async (time: number): Promise<void> => {

      console.clear()

      var blockchain = await BlockService.getBlocks()

      if(blockchain != undefined && blockchain != null){
         if(!this.checkChainValidity(blockchain)){
            await BlockService.rebuildBlockchain()
            await new Promise(r => setTimeout(r, 2000));
         }
         else{
            this.Blockchain = blockchain
            console.log('Blockchain: ' + blockchain.length)
            blockchain.forEach(x => console.log('Hash: ' + x.Hash + ' | Nonce: ' + x.Nonce + ' | Duration (min): ' + x.Duration))
         }
      }

      // LOOP
      setTimeout(() => this.monitor(time) ,time)          
   }

   diff_minutes = (date2, date1): number => {
      var diff =(date2.getTime() - date1.getTime()) / 1000;
      diff /= 60;
      return Math.abs(Math.round(diff));   
   }
   
}