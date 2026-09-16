const fs = require('fs');
fs.mkdirSync('sample Folder');
console.log("Folder created succfully")

//delete
fs.rmSync('sample Folder');
console.log("Folder Delete Succfully")


//create 
fs.writeFileSync('secAstudent.txt' , 'This is the expriment no 2 and Wite file' , 'utf8');
if(fs.existsSync('secAstudent.txt')){
    console.log("file exists")
}else{
    console.log("File not found, need to create this file")
}