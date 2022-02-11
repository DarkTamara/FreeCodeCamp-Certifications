function checkCashRegister(price, cash, cid) {
    //price is purchase price 
    //cash is payment 
    //cid is cash in drawer [ array with the currencies]

    //the function returns an object with a status and a change key

    //{status: "INSUFFICIENT_FUNDS", change: []}    when cid < change, change returns empty                 //SOLVED
    //{status: "CLOSED", change: [...]}             when cid = change, the change returns as the cid        //SOLVED
    //{status: "OPEN", change: [...]}               when cid > change, the change i return sorted high to low


//change needed
    let changeUSD = parseFloat((cash - price).toFixed(2))


//total cash in drawer
    let totalCID = parseFloat((cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1]+ cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1]).toFixed(2))


    if ( changeUSD > totalCID ) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    if ( changeUSD == totalCID ){
        return {status: "CLOSED", change: [...cid]}
    }



 //all coinNames, coinsInDrawer and coinsValues have same index
    let coinsValues = [ 0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]

    let coinNames = ["PENNY" , "NICKEL" , "DIME" , "QUARTER" , "ONE" , "FIVE" , "TEN" , "TWENTY" , "ONE HUNDRED"]

    let coinsInDrawer = [parseInt(cid[0][1] / 0.01) , parseInt(cid[1][1] / 0.05) , parseInt(cid[2][1] / 0.1 ) , parseInt(cid[3][1] / 0.25) , parseInt(cid[4][1] / 1) , 
                            parseInt(cid[5][1] / 5) ,  parseInt(cid[6][1] / 10) ,  parseInt(cid[7][1] / 20) , parseInt(cid[8][1] / 100)]


    let result = {status: "OPEN", change: []}  


//start from 100 and loop backwards till change is 0
    highestCoinNeeded = 100

    let inventoryCoins = coinsInDrawer[coinsValues.indexOf(highestCoinNeeded)]

    while (changeUSD != 0 ) {

        //if i still have the coin and i can substract it  :  substract it from change, substract from inventary and push to result
        if ( inventoryCoins > 0 && (changeUSD - highestCoinNeeded) >= 0){

            changeUSD = parseFloat((changeUSD - highestCoinNeeded).toFixed(2))
            inventoryCoins = inventoryCoins - 1 


            //check if the coin is already there
            //if yes, add up the same coin

            //else push the coin anme and coin array

            result.change.push( [ coinNames[coinsValues.indexOf(highestCoinNeeded)] , highestCoinNeeded ] )



        }

        //if i don.t have the coin take the next lesser coin 
        else {

            highestCoinNeeded = coinsValues[coinsValues.indexOf(highestCoinNeeded)- 1] 
            inventoryCoins = coinsInDrawer[coinsValues.indexOf(highestCoinNeeded)]
        }

    }

//TEST : getting the sorting alghorithm

    let change =  result.change
    //sort out the result to make sure no duplicates appear

    for ( let i = 0 ; i < change.length ; i++  ) {

        for ( let j = i + 1 ; j < change.length - 1 ; j++ ){

            //if they have the same name add them up, overwrite the first one and delete the second one
            if ( change[ i ][ 0 ] == change[ j ][ 0 ] ){

                change[ i ][ 1 ] = change[ i ][ 1 ] + change[ j ][ 1 ]

                change.splice( change.indexOf(change[ j ]) , 1 )

            }

        }


    }
   










}
  
  checkCashRegister(19.07, 21, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], 
  ["ONE HUNDRED", 100]]);