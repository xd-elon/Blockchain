const { SHA256 } = require("crypto-js")

class Block{
   constructor(index, data, timestamp = String(new Date()), previusHash) {
      this.data = data;
      this.index = index;
      this.timestamp = timestamp;
      this.previusHash = previusHash;
      this.nonce = 0;

      this.hash = this.computeHash()
   }

   mineBlock(difficulty) {
      while(this.hash.substring(0, difficulty) !== Array( difficulty + 1).join('0')) {
         this.nonce++;
         this.hash = this.computeHash();
     }
     console.log(`block ${this.index + 1} mined ${this.hash}`)
   }
   
   computeHash() {
      return SHA256(JSON.stringify(this.data) + this.index + this.timestamp + this.previusHash + this.nonce).toString();
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

module.exports = Block;