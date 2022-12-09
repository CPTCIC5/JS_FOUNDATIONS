const age=prompt('what is ur age dear')
if (age<0){
    console.error('Invalid Input Format')
}
else if (age>=10 && age<=20){
    alert('works ,found')
}
else {
    alert('khatam')
}
let checking=confirm('pakka na?')
if (checking){
    alert('nice')
}
else{
    alert('jldi kr check phirse')
}
console.log(checking)

let color=prompt('color bta')
document.body.style.background=color