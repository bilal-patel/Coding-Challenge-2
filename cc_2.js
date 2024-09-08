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

