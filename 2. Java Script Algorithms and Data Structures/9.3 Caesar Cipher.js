//create a Caesar Cipher/Shift Cipher decoder
//the letters meaning is shifted by an ammount ( 13 in a ROT13 cipher)

function rot13(str) {

    let first = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
    let second = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


    //split into words then into letters, each word in a array
    let words =  str.split(" ").map( word => word.split("") )


    //add space to each arrays end except the last
    for( let i = 0 ; i < words.length - 1 ; i++ ){
        words[i].push(" ")
    }


    //get rid of teh nesting
    words = words.flat()


    let solution =[]


    //loop in the array and change each letter
    words.map( letter => {

            //check if in the first array, push the letter with the same index from the second array
            if ( first.includes(letter))
            {            
                solution.push(second[first.indexOf( letter )])
            } 

            //check if in the second array, push the letter with the same index from the first array
            else if ( second.includes(letter) )
            {
                solution.push(first[second.indexOf( letter )])
            } 

            //when punctuation or space just push
            else
            {
                solution.push(letter)
            }
    } )

return solution.join("")


}
  
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");