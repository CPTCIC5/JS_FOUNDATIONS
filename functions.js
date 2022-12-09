//Functions
//a simple printing fun

function noob() {
    console.log('function is workin');
}
noob();

// a fun taking input of name n printing with Hey +name
/*
function name(){
    let user_name=prompt('what is ur name');
    let result= 'HEY' + ' ' + user_name;  //concatination (same as py)
    console.log(result);
}
name();
*/

//fun with paramaters n arguments
function arguments(n1,n2) {
    console.log(n1+n2)

}
arguments('6','9')



//example of callback (calling a fun inside a func)
/*
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);
*/

//JS fetches out variable data asyncroniously while called in a function(possible in python)
/*function a() {
  console.log(b)
}

var b=10
a()
*/

//in JS  we can call function ansyc. even outside scope of any function(we can't call outside any scope in python)
/*square(3)
function square(n){
  return n*n
}*/ 