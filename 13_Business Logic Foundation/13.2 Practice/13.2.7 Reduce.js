const sales = [1000, 2500, 1500, 3000];
const totalReveneu = sales.reduce((totalReveneu, sales) =>{
    return totalReveneu + sales;
});

console.log(totalReveneu);