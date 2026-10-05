const customers = [
    {
        id: 130,
        name: "Rahul"
    },
    {
        id: 129,
        name: "Ram"
    },
    {
        id: 88,
        name: "Shayam"
    },
];

const BestCustomers = customers.find(customers =>{
return customers.id === 130;
});

console.log(BestCustomers);