//var was used to store values it's obselete now
//let is currently used to store data it's value can be changed altho it's immutable 
//const ,are  variables whose value/name cant be changed/used

/*
var x1='aryan';
console.log(x1);
if (x1.length >= 5) {
    var x1='noob'
    console.log(x1)
}
console.log(x1); */
//it stores value of x1 as "noob" even tho it's iteration value to the global scope value


/*let x1='aryan';
console.log(x1);
if (x1.length >= 5) {
    let x1='noob'
    console.log(x1)
}
console.log(x1);*/
//works f9

const x1='aryan';
console.log(x1);
if (x1.length >= 5) {
    const x1='noob'
    console.log(x1)
}
console.log(x1)

