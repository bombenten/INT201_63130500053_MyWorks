
let month = 12;
let year = prompt("Please enter year of your birth :"); //รับข้อมูลหน้า browser
let mod = year % month;
let newLine = "\r\n";

function Zodiax1(year) {
    let zodi;
    switch (mod) {
        case 0:
            zodi = 'monkey';
            break;
        case 1:
            zodi = 'rooster';
            break;
        case 2:
            zodi = 'dog';
            break;
        case 3:
            zodi = 'pig';
            break;
        case 4:
            zodi = 'rat';
            break;
        case 5:
            zodi = 'ox';
            break;
        case 6:
            zodi = 'tiger';
            break;
        case 7:
            zodi = 'rabbit';
            break;
        case 8:
            zodi = 'dragon';
            break;
        case 9:
            zodi = 'snake';
            break;
        case 10:
            zodi = 'horse';
            break;
        case 11:
            zodi = 'sheep';
            break;
        default:
            zodi = 'errer';
    }
    return zodi
}

//Ref By Chayakorn ทดสอบทำเเบบเพื่อน
function Zodiac2(year) {
    let Zodiac = ['monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horses', 'sheep'];
    return Zodiac[mod];
}

alert('Zodiax1 use switch : ' + Zodiax1(year) + newLine +'Zodiax2 use array : ' + Zodiac2(year));

console.log('Zodiax1 use switch : ' + Zodiax1(year));
console.log('Zodiax2 use array : ' + Zodiac2(year));
