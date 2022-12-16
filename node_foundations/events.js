const EventEmittor = require('events')
class MyEmittor extends EventEmittor {}

const myEmittor = new MyEmittor();
myEmittor.on('WaterFull', () =>{
    console.log('Turn off the motor')
    setTimeout(() => {
        console.log('gentle reminder')
    }, 3000);
});
myEmittor.emit('WaterFull');
console.log('executed')
