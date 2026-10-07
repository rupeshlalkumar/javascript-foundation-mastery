const sales = [1200, 2500, 1800, 3000];
const totalReveneu = sales.reduce((totalReveneu, sales) =>{
    return totalReveneu + sales;
});

console.log(totalReveneu);