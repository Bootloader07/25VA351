const EventEmitter = require('events'); //class
const myEmitter = new EventEmitter();   //object
//use two method on and emit, use emit to 
//trigger or invoc the event

myEmitter.on('greet' , (name)=>{
    console.log(`Hello ${name}! Welcome to Node.js`)
});

myEmitter.on('exit' , ()=>{
    console.log("Applitation Closed.");
});

myEmitter.emit('greet', '2nd year');
myEmitter.emit('exit')

myEmitter.on('exit' , ()=>{
    console.log("Applicaton Closed");
})
myEmitter.emit('greet' , '2nd year');
myEmitter.emit('exit');