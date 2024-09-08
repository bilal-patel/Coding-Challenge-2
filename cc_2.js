// Task 1 - Calculate the Tip

let bill = 100
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log (tip)

// Task 2 - Output details
console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);
