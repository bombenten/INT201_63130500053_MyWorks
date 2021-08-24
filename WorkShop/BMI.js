
//input ค่าเอง
let pound = prompt('Your pound is : ');
let inch = prompt('Your inch is : ');
const convertKg = 0.453592;
const convertM = 0.0254;


function bmi(pound, inch) {
    let kilogram;
    let meter;
    let bmi;

    kilogram = pound * convertKg;
    meter = inch * convertM;

    bmi = kilogram / (meter * meter)
    return bmi;
}

alert('Your BMI is : ' + bmi(pound, inch));
console.log('Your BMI is : ' + bmi(pound, inch));