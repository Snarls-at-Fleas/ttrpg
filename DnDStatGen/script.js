let characterName = "Zhloborel";

// Temorary string for character name display
// <h2 class="characterName">Character Name</h2>

function diceRoll(diceNumber, dieSize) {
    let rollResultsArray = [];
    for (i = 1; i <= diceNumber; i++) {
        let dieRoll = Math.floor(Math.random() * dieSize) + 1;
        rollResultsArray.push(dieRoll);
    }
    return rollResultsArray;
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
    stats[i].roll = diceRoll(3, 6);
    for (let j = 0; j <= 2; j++) {
        stats[i].value = stats[i].value + stats[i].roll[j];
    }
}

function saveAndRoll() {
    let nameEntered = document.getElementsByClassName('characterName')[0].value;
    const nameDisplay = document.getElementById('nameInput');
    const buttonDisplay = document.getElementById('rollButton');
    if (nameEntered === "") {
        nameEntered = "Zhloborel";
    }
    nameDisplay.innerHTML = '<p2>' + nameEntered + '</p2>';
    rollButton.innerHTML = '';
};

// console.log("Character name:", characterName);
// for (let i = 0; i <= 5; i++) {
//     console.log(stats[i].name, stats[i].value, "- dice rolled for", 
//     stats[i].name, stats[i].roll[0], stats[i].roll[1], stats[i].roll[2]);
// }

const btn = document.querySelector('button');
btn.addEventListener('click', () => saveAndRoll());