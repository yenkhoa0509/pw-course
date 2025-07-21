let myHeight = 170;

let oddPartOfHeight = myHeight % 100;

let myIdealWeight = (oddPartOfHeight * 9) / 10;

let myMaxWeight = oddPartOfHeight;

let myMinWeight = (oddPartOfHeight * 8) / 10;

console.log(
    "Cân nặng lý tưởng: " + myIdealWeight + "kg, Cân nặng tối đa: " + myMaxWeight + "kg, Cân nặng tối thiểu: " + myMinWeight + "kg"
);
