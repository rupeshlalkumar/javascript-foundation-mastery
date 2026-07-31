// Profit Calculator
const costPrice = 3000;
const sellingPrice = 5000;
const profit = sellingPrice - costPrice;
const loss = costPrice - sellingPrice;
const percentage = (profit / costPrice) * 100;
console.log(`CostPrice: ${costPrice}`);
console.log(`SellingPrice: ${sellingPrice}`);
console.log(`Profit : ${profit}`);
console.log(`Loss : ${loss}`);
console.log(`Percentage: ${percentage + "%"}`);