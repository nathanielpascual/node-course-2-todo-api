const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id : 10
}

var token = jwt.sign(data,'123abc');

console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log('decoded',decoded);
//jwt.verify;
// var message = 'I am user number 3';

// var hash = SHA256(message).toString();

// // console.log(`Message : ${message}`);
// // console.log(`Hash : ${hash}`);

// var data = {
//     id : 3
// };

// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// console.log(token.hash);
// console.log(resultHash);
// if(resultHash === token.hash)
// {
//     console.log('Data was not changed');
// }
// else
// {
//     console.log('Data was changed. Do not trust');
// }

