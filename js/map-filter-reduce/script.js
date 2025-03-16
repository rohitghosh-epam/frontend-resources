
//The Input Array

const users = [
    {first: "Rohit", last: "Ghosh", age: 22},
    {first: "Rohan", last: "Ghosh", age: 31},
    {first: "Nilanajan", last: "Pal", age: 31},
    {first: "Rishabh", last: "Ghosh", age: 1},
    {first: "Subashish", last: "Ghosh", age: 59},
    {first: "Jhimly", last: "Ghosh", age: 57},
];

// Expected Output : { 22: 1, 31: 2, 1: 1, 59: 1, 57: 1 }

const output = users.reduce(function (acc, current) {
    if(acc[current.age]) acc[current.age] = ++acc[current.age];
    else acc[current.age] = 1;

    return acc;
}, {});

console.log(output);