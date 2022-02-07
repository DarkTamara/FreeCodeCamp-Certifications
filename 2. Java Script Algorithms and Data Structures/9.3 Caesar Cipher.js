//create a Caesar Cipher/Shift Cipher decoder
//the letters meaning is shifted by an ammount ( 13 in a ROT13 cipher)

function rot13(str) {

let first = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
let second = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"]

//split into words, then words in letters inside an array each word
let result =  str.split(" ").map( word => {
    word =  word.split("")
    
    for( let i = 0; i <= word.length; i++){
        let letter = word[i]    //the letter 

        if ( first.includes(letter )){            //check if in the first array
             word.splice( i , 1 , second[first.indexOf( letter )] )
            console.log( "letter in first: "+ letter )
             console.log(  "index in first: " + first.indexOf( letter ) )
             console.log(  "letter to replace with : " + second[first.indexOf( letter )] )
             console.log( "word is now: " + word )
        } else {
            word.splice( i , 1 , first[second.indexOf( letter )] )
            console.log( "letter in second: "+ letter )
            console.log( "index in second: " + second.indexOf( letter ) )
            console.log(  "letter to replace with : " + first[second.indexOf( letter )] )
            console.log( "word is now: " + word )
        } 
    }
})
//use a for for the to be replaced index



console.log(result)

// return result.map( words => words.join("") ).join("")
  
  }
  
  console.log(rot13("SERR PBQR PNZC"));