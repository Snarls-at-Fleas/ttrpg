function diceRoll(diceNumber, dieSize) {
    let rollResultsArray = [];
    for (i = 1; i <= diceNumber; i++) {
        let dieRoll = Math.floor(Math.random() * dieSize) + 1;
        rollResultsArray.push(dieRoll);
    }
    return rollResultsArray;
}

let pc00001 = [
    {charName: "Zhloborel"},
    {name: "Str", value: 10, roll: [4, 3, 3]},
    {name: "Int", value: 10, roll: [4, 3, 3]},
    {name: "Wis", value: 10, roll: [4, 3, 3]},
    {name: "Dex", value: 10, roll: [4, 3, 3]},
    {name: "Con", value: 10, roll: [4, 3, 3]},
    {name: "Cha", value: 10, roll: [4, 3, 3]}
];

// const para = document.createElement('p');
// para.innerText = playerCharacter[0].charName;
// const div = document.querySelector('.characterName');
// div.appendChild(para);

// FUNCTION IS WRONG
// It should work as follows:
// Create div with class 'character'
// Create div with class 'characterName'
// Create p with character name
// Append p to div 'characterName'
// Create six divs with classes 'stat' & 'Str or Dex etc'
// Create ps for them with stats & dice rolls
// Append ps to appropriate divs
// Append div 'character' as a child to div charSheets
// Also do something about you naming!!!

function displayCharacter(charNumber, sheetsCount) {
    // Create div for current character and append it to charSheets
    // div as a child
    let divCharacter = document.createElement('div');
    divCharacter.classList.toggle('character');
    divCharacter.classList.toggle(sheetsCount);
    let container = document.querySelector('.charSheets');
    container.appendChild(divCharacter);
    // Create paragraph for character name with class .characterName
    // add name as text content taken from object
    // and append it to prev div as a child
    let paraCharName = document.createElement('p');
    paraCharName.classList.toggle('characterName');
    paraCharName.textContent = charNumber[0].charName;
    container = document.querySelector('.' + sheetsCount);
    container.appendChild(paraCharName);
    // Create div to contain character stats and dice rolled for them
    // and append it to div with class 'character' as a child
    let divCharacterStats = document.createElement('div');
    divCharacterStats.classList.toggle('characterStats');
    container = document.querySelector('.' + sheetsCount);
    container.appendChild(divCharacterStats);
    // Go through stat in the object (elements 1-6), create two paragraphs for each:
    // one to display the name of the stat and it's value and another to display dice rolled for it.
    // Add two clases - 'stat' & short name for the stat taken from object.
    // Add text content to both paragraphs
    // Append both as children to 'characterStats' div
    for (i = 1; i <= 6; i++) {
        let para1 = document.createElement('p');
        para1.classList.toggle('stat');
        para1.classList.toggle(charNumber[i].name);
        let para2 = document.createElement('p');
        para2.classList.toggle('diceRolled');
        para1.classList.toggle(charNumber[i].name);
        para1.textContent = charNumber[i].name + " " + charNumber[i].value;
        para2.textContent = "Dice rolled for " + charNumber[i].name + ": " + charNumber[i].roll[0] + " + " 
        + charNumber[i].roll[1] + " + " + charNumber[i].roll[2]
        let container = document.querySelector('.' + sheetsCount);
        container.appendChild(para1);
        container.appendChild(para2);
    } return;
}

for (let i = 0; i < 4; i++) {
    let n = "sheet" + "000" + i;
    console.log(n);
    displayCharacter(pc00001, n);
}