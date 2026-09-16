//create or write property of file system
 
const fs = require('fs');
fs.writeFileSync('secAstudent.txt' , 'This is the expriment no 2 and Wite file' , 'utf8');
console.log('file is written succesfully\n');


//read
const data = fs.readFileSync('secAstudent.txt' , 'utf8')
console.log('File read succfully' , data)

//append
fs.appendFileSync('secAstudent.txt' , '\n This is the new line added' , 'utf8')
console.log("File is appended")