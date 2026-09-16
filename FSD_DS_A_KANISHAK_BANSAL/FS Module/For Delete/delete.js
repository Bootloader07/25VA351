//create or write property of file system
 
const fs = require('fs');
fs.writeFileSync('example2Delete.txt' , 'This is the expriment no 2 and Wite file' , 'utf8');
console.log('file is written succesfully\n');


fs.unlinkSync('example2Delete.txt')
console.log("File delete succfully")