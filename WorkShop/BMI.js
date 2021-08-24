
//input ให้ pound & inch มีจำนวนข้อมูลเท่ากัน
let pound = [36.5, 35.5, 34.5, 33.5];
let inch = [39, 38, 37, 36];

const convertKg = 0.453592;
const convertM = 0.0254;

function bmi(pound, inch) {
    let kilogram;
    let meter;
    let bmi = [];

    for (let i = 0; i < pound.length; i++) {
        let pound2 = pound[i];
        let inch2 = inch[i];

        kilogram = pound2 * convertKg;
        meter = inch2 * convertM;

        bmi[i] = kilogram / (meter * meter);
    } return bmi;

}

for (let j = 0; j < pound.length; j++) {
    console.log('Pound : ' + pound[j] + ' | Inch : ' + inch[j]);
    console.log('Your BMI is : ' + bmi(pound, inch)[j]);
}
