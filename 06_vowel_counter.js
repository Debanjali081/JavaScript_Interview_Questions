
// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


function vowelCounter(str){
    let vowels=['a','e','i','o','u','A','E','I','O','U']
    let foundVowels=[]
    for (let char of str) {
        if(vowels.includes(char)){
            foundVowels.push(char)
        }
        
    }
    return foundVowels;

}

let Vowel=vowelCounter("Debanjali")
console.log(`The vowels are ${Vowel}`)

console.log(`And the number of the vowels are ${Vowel.length}`)