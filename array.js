let arr=['Hey','Dude','How"r u'];

console.log(arr);  //prints whole list 
console.log(arr.length); //prints len/total obj on array
console.log(arr[1]);  //prints 1st element i.e "Dude"

arr[1]='Noob' // to change to value of indexing inside [indexing] (i.e Dude to Noob)
console.log(arr); //checkin'


//USEFUL IN BUILT FUNCTIONS OF ARRAY

console.log(arr.indexOf('Noob')); //tells the indexing  
console.log(arr.toString()); //converts array objects into string
console.log('yeh append huwa ',arr.push('Push')); //appends (this isn't considered as a good way)
console.log('ye popped' ,arr.pop());   //deletes the last value of an array
arr[3] ='xd'; 

console.log(arr.shift()) //removes 1st val of array
console.log(arr.unshift('kiwi'))  //appends to 1st/0th index/beginning of array 

console.log(arr);

//SLICING
console.log('slicing result is ' ,arr.slice(0,4));


//getting all items 1 by 1 (like we used to do in py)

/*
for (i=0; i<arr.length; i++) {
    console.log(arr[i])
}
*/

//SORTING,REVERSING,ADDING/CONCATINATING

let fruits=['banana','apple','kiwi'];
let combination= arr.concat(fruits);  //it combines arr named array with  fruits array w
console.log(combination.reverse());  //reverse is used to reverse objects


let counting=[4,62,52,69];
console.log(counting.sort()); //to sort 

x2=counting.reverse();
console.log(x2[0])   // sol of printing largest no. in a array