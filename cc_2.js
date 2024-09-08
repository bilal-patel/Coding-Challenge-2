// Task 1 - Calculate the Tip

let bill = 150
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log (tip)

// Task 2 - Output details
console.log(`The bill was $${bill}, the tip was $${tip} and the total value is $${bill + tip}`);

// Task 3 - Create a function

function calculateTip (bill) {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
return tip;}

let testBill = 100; 
let testTip = calculateTip(testBill);
console.log (testTip);

//Task 4 - Utilize Arrays

// generating tips for first data set
let dataSetOne = [275, 40, 430];
const tipsOne = dataSetOne.map ((element)=> calculateTip(element));
console.log(tipsOne);

// generating tips for second data set
let dataSetTwo = [125, 555, 44];
const tipsTwo = dataSetTwo.map ((element)=> calculateTip(element));
console.log(tipsTwo);

// generating sums 1
const totalsOne = dataSetOne.map ((bill, index) => bill + tipsOne[index]);
console.log (totalsOne);

// generating sums 2
const totalsTwo = dataSetTwo.map ((bill, index) => bill + tipsTwo[index]);
console.log (totalsTwo);

// completed task 4 with 5. Test Data^^