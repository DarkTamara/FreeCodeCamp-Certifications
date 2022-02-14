function checkCashRegister(price, cash, cid) {
    //price is purchase price 
    //cash is payment from client
    //cid is cash in drawer [ array with the currencies]

    //the function returns an object with a status and a change key

    //{status: "INSUFFICIENT_FUNDS", change: []}    when cid < change, change returns empty                 //SOLVED
    //{status: "CLOSED", change: [...]}             when cid = change, the change returns as the cid        //SOLVED
    //{status: "OPEN", change: [...]}               when cid > change, the change i return sorted high to low


    let coinsValues = [ 0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]

//change needed
    let changeUSD = parseFloat((cash - price).toFixed(2))


    //total cash in drawer
    let totalCID = 0
    
    //set the coin index to the biggest coin
    let indexCoin = coinsValues[ coinsValues.length - 1 ]

    //find the bigest coin i can pay with
    while ( (changeUSD - indexCoin) < 0 ){

        indexCoin = coinsValues[ coinsValues.indexOf( indexCoin ) -1 ]

    }

    //get the index of the biggest paying coin
    indexCoin = coinsValues.indexOf( indexCoin )

    //add up the coins up to the biggest coin i can pay with
    for ( let i = 0 ; i <=  indexCoin ; i++ ){

                totalCID = totalCID + cid[ i ][ 1 ] 

    }

    totalCID = parseFloat( totalCID.toFixed(2) )



    if ( changeUSD > totalCID ) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    if ( changeUSD == totalCID ){
        return {status: "CLOSED", change: [...cid]}
    }



 //all coinNames, coinsInDrawer and coinsValues have same index


    let coinNames = ["PENNY" , "NICKEL" , "DIME" , "QUARTER" , "ONE" , "FIVE" , "TEN" , "TWENTY" , "ONE HUNDRED"]


    let coinsInDrawer = [parseInt(cid[0][1] / 0.01) , parseInt(cid[1][1] / 0.05) , parseInt(cid[2][1] / 0.1 ) , parseInt(cid[3][1] / 0.25) , parseInt(cid[4][1] / 1) , 
                            parseInt(cid[5][1] / 5) ,  parseInt(cid[6][1] / 10) ,  parseInt(cid[7][1] / 20) , parseInt(cid[8][1] / 100)]


    let result = {status: "OPEN", change: []}  


//start from 100 and loop backwards till change is 0
    let highestCoinNeeded = 100

    let inventoryCoins = coinsInDrawer[coinsValues.indexOf(highestCoinNeeded)]

    let lastCoinAddedName 
    let lastCoinAddedValue

    while (changeUSD != 0 ) {

        //if i still have the coin and i can substract it  :  substract it from change, substract from inventary and push to result
        if ( inventoryCoins > 0 && (changeUSD - highestCoinNeeded) >= 0){


            changeUSD = parseFloat((changeUSD - highestCoinNeeded).toFixed(2))
            inventoryCoins = inventoryCoins - 1 

            let coinName = coinNames[coinsValues.indexOf(highestCoinNeeded)] 

            //when the array is empty 
            if ( result.change.length == 0 ) {

                result.change.push( [ coinName, highestCoinNeeded ] )

                lastCoinAddedName =  result.change[  result.change.length -1 ][ 0 ]
                lastCoinAddedValue = result.change[  result.change.length - 1 ][ 1 ]

            }

            //check if the coin is already there by looking in the last array added add up the change
            else if ( coinName == lastCoinAddedName ) {
                result.change[  result.change.length - 1 ][ 1 ] = result.change[  result.change.length - 1 ][ 1 ] + lastCoinAddedValue
            }
            
            //else push the coin name and coin array
            else {

                result.change.push( [ coinName, highestCoinNeeded ] )
                lastCoinAddedName =  result.change[  result.change.length -1 ][ 0 ]
                lastCoinAddedValue = result.change[  result.change.length -1 ][ 1 ]
            }
            

        }

        //if i don.t have the coin take the next lesser coin 
        else {

            highestCoinNeeded = coinsValues[coinsValues.indexOf(highestCoinNeeded)- 1] 
            inventoryCoins = coinsInDrawer[coinsValues.indexOf(highestCoinNeeded)]
        }

    }

    return result

}
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);