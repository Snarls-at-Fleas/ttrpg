let characterName = "";
characterName = prompt("Please enter character name:");            

// Rewrite both rolld6() & roll3d6() as a single function that takes number of dice to be rolled
// and their size (number of sides) and returns the result as an array (like [x, x, x] for 3d).

function rolld6() {
    let d6Roll = Math.floor(Math.random() * 6) + 1;
        return d6Roll;
    }            

function roll3d6() {
    let threeD6Roll = [];
    for (let i = 1; i <= 3; i++) {
        threeD6Roll.push(rolld6());
    }
    return threeD6Roll;
}

let stats = [
    {name: "Str", value: 0, roll: []},
    {name: "Int", value: 0, roll: []},
    {name: "Wis", value: 0, roll: []},
    {name: "Dex", value: 0, roll: []},
    {name: "Con", value: 0, roll: []},
    {name: "Cha", value: 0, roll: []}
];
            
for (let i = 0; i < 6; i++) {
    stats[i].roll = roll3d6();
    for (let j = 0; j <= 2; j++) {
        stats[i].value = stats[i].value + stats[i].roll[j];
    }
} 


console.log("Character name:", characterName);
for (let i = 0; i <= 5; i++) {
    console.log(stats[i].name, stats[i].value, "- dice rolled for", 
    stats[i].name, stats[i].roll[0], stats[i].roll[1], stats[i].roll[2]);
}            