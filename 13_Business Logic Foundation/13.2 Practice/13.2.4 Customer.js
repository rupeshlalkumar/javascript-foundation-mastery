const customers = [
    {
        name: "Rahul",
        active: false
    },

    {
        name: "Ram",
        active: false
    },
    {
        name: "Shyam",
        active: true
    },
];

const NewCustomers = customers.filter(customers =>{
    return customers.active === false;
});

console.log(NewCustomers);
