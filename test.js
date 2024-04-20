//test.js file content
const{sum, fromYenToPound} = require('./app.js');

//test #1
test('adds 69 + 420 to equal 489', () => {
    //Call our sum function w/ our 2 numbers
    let total = sum(69,420);
    //Expected sum: 489
    expect(total).toBe(489);
});

//test #2
test("One euro should be $1.07", () => {
    const{fromEuroToDollar} = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    //3.5 euro should be (3.5*1.07)
    const expected = 3.5*1.07;
    
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

//test #3
test("$1 should equal to ¥154.62", () => {
    const{fromDollarToYen} = require('./app.js');

    const 何円 = fromDollarToYen(20);

    //$20 should return (20*154.62)
    const expected = 20*154.62;

    expect(fromDollarToYen(20)).toBe(3092.4);
});

//test #4
test("¥1 should equal to 0.0052 GBP", () => {
    const{fromYenToPound} = require('./app.js');

    const oiBruv = fromYenToPound(2500);

    const expected = 2500*0.0052;

    expect(fromYenToPound(2500)).toBe(13);

});