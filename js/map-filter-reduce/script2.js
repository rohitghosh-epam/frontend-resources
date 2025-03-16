
// Get the First Name of the functions who have age lesser than 35

//The Input Array

const users = [
    {first: "Rohit", last: "Ghosh", age: 22},
    {first: "Rohan", last: "Ghosh", age: 31},
    {first: "Nilanajan", last: "Pal", age: 31},
    {first: "Rishabh", last: "Ghosh", age: 1},
    {first: "Subashish", last: "Ghosh", age: 59},
    {first: "Jhimly", last: "Ghosh", age: 57},
];

// Expected Output : { "Rohit", "Rohan", "Nilanjana", "Rishabh" }


// Chaining Map and Filter functions
const output1 = users.filter( (current) => current.age < 35).map( (current) => current.first);
console.log(output1);


// Doing the same problem with Reduce Function only
const output2 = users.reduce( function (acc, current) {
    if(current.age < 35) acc.push(current.first);
    return acc;
}, []);
console.log(output2);