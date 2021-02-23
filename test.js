// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// 2nd test - euro to $
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.2 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

// 3rd test - dollar to Yen
test("convetir $10 a yenes siendo el resultado YENES 1065,83", function(){
    const { fromDollarToYen} = require('./app.js')
    const total = fromDollarToYen(10);
    expect(total).toBe(1065.8333333333335);
});

// 4th test - Yen to Pound
test("convetir $10 a yenes siendo el resultado YENES 1065,83", function(){
    const { fromDollarToYen} = require('./app.js')
    const total = fromDollarToYen(10);
    expect(total).toBe(1065.8333333333335);
});

// 5th test - Yen to Pound
test("convetir 10 Yenes a libras siendo el resultado 0.06", function(){
    const { fromYenToPound } = require('./app.js')
    const total = fromYenToPound (10);
    expect(total).toBe(0.06254886630179828);
});