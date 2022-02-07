//check if the given word is a palindrome
//if yes return true, if no return false


function palindrome(str) {

    //extract the letters and numbers and make all lowercase
    let onlyLetters = str.match( /[a-zA-Z0-9]/ig ).map( elem => elem.toLowerCase() )

    let slice   //after the middle
    let untilSlice  //untill the middle

    //create a index for the slice after the middle elem
    if( Number.isInteger(onlyLetters.length / 2) ){ //even length case
        slice = onlyLetters.slice(onlyLetters.length / 2).reverse() //slice the array in half and reverse it
        untilSlice = onlyLetters.slice(0 , onlyLetters.length / 2 )
    } 
    else {    //odd length case
        slice = onlyLetters.slice( parseInt(onlyLetters.length / 2) +1).reverse()//+1 so it skippes the middle elem when slicing
        untilSlice = onlyLetters.slice(0 ,  parseInt(onlyLetters.length / 2) )//-1 so it expludes the middle
    }

    console.log("array " + onlyLetters)
    console.log( "slice " + slice )
    console.log( "untilSlice" + untilSlice )

    //compare the arrays by turning then to strings and comparing them
    if( JSON.stringify( untilSlice ) === JSON.stringify( slice ) ){ //similar to .toString()
        return true
    } 
    else {
        return false
    }
}
  
  palindrome("0_0 (: /-\ :) -0");