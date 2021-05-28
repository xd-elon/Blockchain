import SHA256 from "crypto-js/sha256"

export default class Block{

   // VARIABLES
   Index: number
   Timestamp: string
   Data: any
   Hash: string


   constructor(index: number, data: any, timestamp = String(new Date())) {
      this.Index = index
      this.Timestamp = timestamp
      this.Data = data
      this.Hash = this.computeHash()
   }
   

   computeHash = (): string => {
      return SHA256(
         JSON.stringify(this.Data) +
         this.Index +
         this.Timestamp 
      ).toString();
   }

  /* proofOfWork = (difficulty: number): void => {
      while (
         this.Hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
      ) {
         this.Nonce++;
         this.Hash = this.computeHash();
      }
   }
   */

}