const fs = require('fs');

fs.writeFile(
    'sample.text' , 'welcome to full stack d3evelopment' , (err) => {
        if(err){
            console.log("\nError creating file: " , err);
            return ;
        }
        console.log('\nFile created succfully!')
    }
)

fs.readFile('sample.txt' , 'utf8' , (err,data) =>{
    if(err){
        console.log("\nError reading file: " , err);
        return ;
    }
    if(data){
        console.log('\nFile read succefully')
        console.log(data);
    }
})

//append
fs.appendFile('sample.txt' , '\nSemester: 3' , (err) => {
    if(err){
        console.log("\nError Updating file" , err);
    }else{
        console.log("\n File updated successfully");
    }

})


//Update read
fs.readFile('sample.txt' , 'utf8' , (err,data) =>{
    if(err){
        console.log("Error while updateing read");
        return ;
    }
    else{
        console.log("Update read successfully")
    }
})

//Delete 

fs.unlink('example.txt' , (err) => {
    if(err){
        console.error("Error deleteing file" , err);
    }
    else{
        console.log('\n4, File deleted succssfully')
    }
})