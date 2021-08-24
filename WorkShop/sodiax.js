
let month = 12;
let year = prompt();
let mod = year % month;

function Zodiax1(year) {
    let zodi;
    switch (mod) {
        case 0:
            zodi = 'monkey';
            break;
        case 1:
            zodi = 'rooster'
            break;
        case 2:
            zodi = 'dog'
            break;
        case 3:
            zodi = 'pig'
            break;
        case 4:
            zodi = 'rat'
            break;
        case 5:
            zodi = 'ox'
            break;
        case 6:
            zodi = 'tiger'
            break;
        case 7:
            zodi = 'rabbit'
            break;
        case 8:
            zodi = 'dragon'
            break;
        case 9:
            zodi = 'snake';
            break;
        case 10:
            zodi = 'horse'
            break;
        case 11:
            zodi = 'sheep'
            break;
        default:
            zodi = 'errer'
    }return zodi
}

//Ref By Chayakorn
function Zodiac2(year) {
    let Zodiac = ['monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horses', 'sheep'];
    return Zodiac[mod];
}


console.log('Zodiax1 : ' + Zodiax1(year));
console.log('Zodiax2 : ' + Zodiac2(year));
