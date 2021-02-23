// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}

const fromDollarToEuro= function(valueInDollar){
    let valueInEuro = valueInDollar / 1.2;
    return valueInEuro;
}

const fromEuroToYen = function(valueInEuro){
    let valueInYen = valueInEuro * 127.9;
    return valueInYen;
}

const fromDollarToYen = function(valueInDollar){
    let euro = fromDollarToEuro(valueInDollar);
    let yen = fromEuroToYen(euro);
    return yen;
}

const fromYenToPound = function(valueInYen){
    return valueInYen / 127.9 * 0.8;
}
console.log(fromYenToPound(10));





//console.log(fromDollarToYen(3.5));
// console.log(fromEuroToDollar(3.5));
// console.log(fromDollarToEuro(4.2))
// console.log(fromEuroToYen(2))


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
//console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { sum };

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen }