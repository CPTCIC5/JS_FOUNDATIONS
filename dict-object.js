let dict=
{
    Sarthak:"Chutiya",
    age:18,
    height:'175cm',
    fulldata : function () {
        return "This is my data " + this.Sarthak  + this.age + this.height
    }
}

console.log(dict.Sarthak,dict.age,dict.height)
dict.Sarthak='Aryan'  //to overwrite value of dict object Sarthak
console.log(dict)
dict.age++
console.log(dict)
console.log(dict.fulldata())