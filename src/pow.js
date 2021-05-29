const { SHA256 } = require('crypto-js');

const difficulty = 5;
let nonce = 0;
let hash = "0";

function mineBlock() {
    while(hash.substring(0, difficulty) !== Array( difficulty + 1).join('0')) {
        nonce++;
        console.log(nonce);
        hash = computeHash();
    }

    console.log('nonce ' + nonce);
    console.log('hash ' + hash);

    return hash;
}

function computeHash() {
    return SHA256("Blockchain" + nonce).toString();
}

mineBlock();