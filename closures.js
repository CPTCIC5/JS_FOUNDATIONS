/*
function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    y()
}
x()
*/

function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    a=100
    y()
}
x()