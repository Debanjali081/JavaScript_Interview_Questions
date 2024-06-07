// The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.



let str = "Debanjali";
let arr = str.split('');
let arr2 = arr.reverse();
let restr = arr2.join('');
console.log(restr)

console.log(`The Concatenation Is ${str + restr}`)


