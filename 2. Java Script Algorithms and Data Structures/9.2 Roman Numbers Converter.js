function convertToRoman(num) {

    //builds the numbers based on the value and push it in the array
    function builder ( order1, order2, order3, number ) {
        console.log("inside the builder number = " + number)

        switch ( true ){
            case number <= 3 : console.log( " Case <= 3")
                transformation.push(order1.repeat(number))    
                console.log( typeof(order1.repeat(number))  ); break;
            case number == 4 : console.log( " Case = 4")
                transformation.push( (order1 + order2) )                
                console.log( typeof(order1 + order2)  ); break;
            case number == 5 : console.log( " Case = 5")
                transformation.push( order2 )
                console.log( typeof(order2)  ); break;
            case number <= 8 : console.log( " Case <= 8")
                transformation.push( order2.concat( order1.repeat( number - 5  ) ) )
                console.log( typeof(order2.concat( order1.repeat( number - 5  ))  )); break;
            case number == 9 : console.log( " Case = 9")
                transformation.push( order1.concat( order3 ) );
                console.log( typeof(order1.concat( order3 ))  ); break;
        }
    }

    //store the transformed parts in this array
    let transformation = []
    var number = parseInt(num)


    //loop in the number 4 times
    while ( number > 0){
        //break the number into Thousands, Hundreds, Tens and Ones and call builder on each
        //Thousands
        console.log("Loop")
        if ( number/1000 >= 1 ){
            builder( "M" , "V" , "X", parseInt(number/1000));
            number = number - parseInt(number/1000) * 1000 //gets rid of the thousands
            console.log(number, transformation)
        } 
        //Hundreds
        else if( number/100 >= 1 ){
            builder( "C" , "D" , "M", parseInt(number/100));
            number = number - parseInt(number/100) * 100 //gets rid of the Hundreds
            console.log(number, transformation)
        }


        //Tens
        else if( number/10 >= 1 ){
            builder( "X" , "L" , "C", parseInt(number/10));
            number = number - parseInt(number/10) * 10 //gets rid of the Hundreds
            console.log(number, transformation)
        }
        //Ones
        else {

            builder( "I" , "V" , "X", number);
            number = 0
            console.log(number, transformation)
        }
    }
    console.log(" final number " + number)
    return transformation.join("")
}
   
   convertToRoman(4520);