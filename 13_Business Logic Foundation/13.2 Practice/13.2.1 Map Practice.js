const customers = [
    "Rahul",
    "Shayam",
    "Binod",
    "Ram",
    "Radhe",
    "Govind",
    "Vashudev",
    "Vishnu",
    "Raman",
    "Hari",
    "Murari"
];

const customersName = customers.map(customers => {
    return customers.toUpperCase();
});

console.log(customersName);