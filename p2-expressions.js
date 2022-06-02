/*
    CIT 281 Project 2
    Name: Steven Shinmachi 
*/


const getRandomLetter = function () {
    
    // alphabet constant
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // return random alphabet from array by getting random number between 0 and 26
    return alphabet[ Math.floor(Math.random() * 26)]

}

console.log(getRandomLetter())

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

let lengthOfOutputString = getRandomInteger(5, 26);

for (let i = 0; i < lengthOfOutputString; i++) {
    result += getRandomLetter();
}

console.log(result);





const getRandomString = function(minLength, maxLength) {
    
    // creating results variable
    let results = "" 
    // for loop that creates a list of random letters
    // length of the list is between the minLength and maxLength
    // note that maxLength is exclusive so must add 1 
    for (let i = 0; i < getRandomInteger(minLength, maxLength + 1); i++) {
        results += getRandomLetter();
    }
    
    // return the list of random letters
    return results

}

console.log(getRandomString(10,20))


const getSortedString = function(string) {
    // split the string, making the string into array, then sorting it in alphabetical order 
   return string.split("").sort()
}

console.log(getSortedString("jdsakfjdaklfjkdlafjeasdvbake"))