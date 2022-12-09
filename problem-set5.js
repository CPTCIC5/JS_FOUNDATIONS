let arr=[2,23,12]
items=[]
added_products = prompt('kitne product add crowge?')
for (i=0;i<added_products;i++) {
    product=prompt('product ka naam btao')
    if (product == 0){
        break
    }
    items.push(product)
}
console.log(items)

let square= items.map((x) => {
    return x*x
})
console.log(square)


let marks = [1,2,3,4,5,6];
let fectorial = marks.reduce((x, y)=>{
  return x * y;
})
console.log(fectorial);
