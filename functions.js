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

<<<<<<< HEAD
=======


>>>>>>> d20a8009d4717aeecba62ae6889a9950af4dbfa8
//example of callback (calling a fun inside a func)
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
<<<<<<< HEAD
  myCalculator(5, 5);
=======
  myCalculator(5, 5);
>>>>>>> d20a8009d4717aeecba62ae6889a9950af4dbfa8
