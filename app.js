//app.js file content
console.log("I WILL say the N word");

//sum function
const sum = (a,b) => {
    return a + b;
}

//testing sum
console.log(sum(12345678,987654321));


const fromEuroToDollar = (euro) => {
    return euro*1.07;
}

const fromDollarToYen = (dollar) => {
    return dollar*154.62;
}

const fromYenToPound = (yen) => {
    return yen*0.0052;
}

/*expoert function to be used (like using "export")*/
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};