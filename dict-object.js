let dict=
{
    Sarthak:"Chutiya",
    age:18,
    height:'175cm',
    fulldata : function () {
<<<<<<< HEAD
        return "This is my data " + this.Sarthak  + this.age + this.height
=======
        return "This is my data" + this.Sarthak + this.age + this.height
>>>>>>> d20a8009d4717aeecba62ae6889a9950af4dbfa8
    }
}

console.log(dict.Sarthak,dict.age,dict.height)
dict.Sarthak='Aryan'  //to overwrite value of dict object Sarthak
console.log(dict)
dict.age++
console.log(dict)
<<<<<<< HEAD
console.log(dict.fulldata())
=======
console.log(dict.fulldata())
>>>>>>> d20a8009d4717aeecba62ae6889a9950af4dbfa8
