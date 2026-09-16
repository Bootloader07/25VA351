const { read, rename } = require("fs");
const { eventLoopUtilization } = require("perf_hooks");

const fs = require("fs").promises;

async function writeFile() {
    try{
        await fs.writeFile("promise.txt" , "Hello Students!");
        console.log("File created and data written successfully!")
    }
    catch(error){
        console.log("Error: " , error);
    }
}
writeFile();

//read file
async function readFile() {
    try{
        const data = await fs.readFile("promise.txt" , "utf8")
        console.log("File Content: ")
        console.log(data);
    }
    catch{
        console.log("Error: " , error);
    }
}
readFile();

//Update FIle
async function updateFile() {
    try{
        await fs.appendFile('promise.txt' , "This is updated file of Promise")
        console.log("File Updated Succfully ")
        console.log(data);
    }
    catch{
        console.log("Error: " , error);
    }
}
updateFile();

//append file
async function  appendFile() {
    try{
        await fs.appendFile("promise.txt" , "Welcome To FSD Training")
        console.log("Data appended successfully")
    }catch(error){
        console.log("Error: " , error);
    }
}
appendFile();

//rename
async function remane() {
    try{
        await fs.rename("promise.txt" , 'promise_new.txt');
        console.log("File renamed successfully.");
    }catch(error){
        console.log("Error" , error);
    }
}
// rename()

//delete
async function del(){
    try{
        await fs.unlink("promise_new.txt");
        console.log("File deleted Successfully");
    }catch(erorr){
        console.log("Error: " , erorr)
    }
}
// del()