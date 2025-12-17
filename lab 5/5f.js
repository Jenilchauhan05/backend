// Create an EventEmitter instance, Register an event "greet" and print a message when 
// triggered. Fire that event manually using .emit().

const EventEmitter = require('events');      
const emitter = new EventEmitter();         

emitter.on('greet', (name) => {
  console.log(`Hello ${name}! Welcome 👋`); 
});

emitter.emit('greet', 'Jenil');             
