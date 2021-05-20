import sha256 from 'crypto-js/sha256';


class Block {

    Index: number
    Timestamp: Date
    Data: any
    Hash: string
    PreviousHash: string
    Nonce: number
    Duration: number


    constructor (
        index: number,
        data: any,
        previousHash: string = "",
        ) {
 
        this.Index = index;
        this.Timestamp = new Date();
        this.Data = data;
        this.Hash = this.computerHash();
        this.PreviousHash = previousHash;
        this.Nonce = 0;
        this.Duration = 0;
    }
}