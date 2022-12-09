

let obj= {
    'harry':98,
    'rohan':70,
    'aakash':7
}
for (let i in obj) {
    console.log(obj[i])
}


let x1=prompt('name')
/*while(true) {
    if (x1 == 'aryan') {
        break
    }
    else{
        console.log('try again')
    }
}*/

while (x1 !='noob') {
    console.log('try again')
}

const mean = (a,b,c,d) => {
    return (a+b+c+d)/4
}

console.log(mean(4,5,6,7))