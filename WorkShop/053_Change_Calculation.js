// let price; //ราคาสินค้า
// let money; //เงินที่จ่าย

function ChangeCalculation(price, money) {
    //สร้าง Obj เเบงค์ต่างๆ
    const banknote = {
        bank500: 500,
        bank100: 100,
        bank50: 50,
        bank20: 20,
        coin10: 10,
        coin5: 5,
        coin2: 2,
        coin1: 1,
    };

    //สร้าง Obj เพื่อเก็บค่าเเบงค์ที่ทอน
    let bankchange = {
        change500: 0,
        change100: 0,
        change50: 0,
        change20: 0,
        change10: 0,
        change5: 0,
        change2: 0,
        change1: 0,
    };

    moneyChange = money - price; //เงินทอน = เงินที่จ่าย - ราคาสินค้า
    if (money < price) {
        return "Error, you don't have enough money."; //ดักไว้เผื่อเงินที่จ่ายน้อยกว่าราคาสินค้า
    }
    if (moneyChange >= banknote['bank500']) { //ถ้าเงินทอน มากกว่าเเบงค์ 500
        bankchange['change500'] = Math.floor(moneyChange / banknote['bank500']); //เอาเงินทอนไปหารเเบงค์ 500 เเล้วปัดเศษลง
        moneyChange = moneyChange % banknote['bank500']; //อัปเดทค่าเงินทอนใหม่โดย เงินทอนใหม่ = เงินทอนเดิม mod เเบงค์ 500
    }
    if (moneyChange >= banknote['bank100']) {
        bankchange['change100'] = Math.floor(moneyChange / banknote['bank100']);
        moneyChange = moneyChange % banknote['bank100'];
    }
    if (moneyChange >= banknote['bank50']) {
        bankchange['change50'] = Math.floor(moneyChange / banknote['bank50']);
        moneyChange = moneyChange % banknote['bank50'];
    }
    if (moneyChange >= banknote['bank20']) {
        bankchange['change20'] = Math.floor(moneyChange / banknote['bank20']);
        moneyChange = moneyChange % banknote['bank20'];
    }
    if (moneyChange >= banknote['coin10']) {
        bankchange['change10'] = Math.floor(moneyChange / banknote['coin10']);
        moneyChange = moneyChange % banknote['coin10'];
    }
    if (moneyChange >= banknote['coin5']) {
        bankchange['change5'] = Math.floor(moneyChange / banknote['coin5']);
        moneyChange = moneyChange % banknote['coin5'];
    }
    if (moneyChange >= banknote['coin2']) {
        bankchange['change2'] = Math.floor(moneyChange / banknote['coin2']);
        moneyChange = moneyChange % banknote['coin2'];
    }
    if (moneyChange >= banknote['coin1']) {
        bankchange['change1'] = Math.floor(moneyChange / banknote['coin1']);
        moneyChange = moneyChange % banknote['coin1'];
    }

    return bankchange;

    //ฟอร์แมทให้ out put ออกมาสวยงาม ** เเต่ถ้าใช้ back thick จะ return ออกมาเป็น String **
    // return `Price : ${price} | Money : ${money}
    // Banknote 500 : ${bankchange.change500}
    // Banknote 100 : ${bankchange.change100}
    // Banknote 50 : ${bankchange.change50}
    // Banknote 20 : ${bankchange.change20}
    // Coin 10 : ${bankchange.change10}
    // Coin 5 : ${bankchange.change5}
    // Coin 2 : ${bankchange.change2}
    // Coin 1 : ${bankchange.change1}`;

    
}

//console.log(ChangeCalculation(product price, money you pay));
console.log(ChangeCalculation(4000, 5000));
console.log(ChangeCalculation(2000, 3280));
console.log(ChangeCalculation(2222, 3323));
console.log(ChangeCalculation(2000, 200));
console.log(ChangeCalculation(37846, 60000));