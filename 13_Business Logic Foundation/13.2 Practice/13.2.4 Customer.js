const customers = [
    {
        name: "Rahul",
        active: true
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
    return customers === true;
});

console.log(NewCustomers);
