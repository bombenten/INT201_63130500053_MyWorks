
// //2.1
// let students = {
//     studentId: '63130500053',
//     firstName: 'ธนาธร',
//     lastName: 'รสหวาน',
//     firstNameEng: 'Thanatorn',
//     lastNameEng: 'Roswan'
// }

// let firstTerm = [  //สร้าง array obj เพื่อเก็บค่ารายวิชา
//     {
//         subjectID: 'GEN101',
//         subjectName: 'Physical Edu.',
//         credit: 1,
//         grade: 'A',
//         score: 4
//     },
//     {
//         subjectID: 'GEN121',
//         subjectName: 'Learning and problem solving',
//         credit: 3,
//         grade: 'B+',
//         score: 3.5
//     },
//     {
//         subjectID: 'INT100',
//         subjectName: 'IT Fund.',
//         credit: 3,
//         grade: 'B+',
//         score: 3.5
//     },
//     {
//         subjectID: 'INT101',
//         subjectName: 'Programing Fund.',
//         credit: 3,
//         grade: 'C+',
//         score: 2.5
//     },
//     {
//         subjectID: 'INT102',
//         subjectName: 'WebTechnology',
//         credit: 1,
//         grade: 'B+',
//         score: 3.5
//     },
//     {
//         subjectID: 'INT114',
//         subjectName: 'Discrete Math.',
//         credit: 3,
//         grade: 'B',
//         score: 3
//     },
//     {
//         subjectID: 'LNG220',
//         subjectName: 'Academic Eng.',
//         credit: 3,
//         grade: 'C',
//         score: 2
//     },
// ]

// let secoundTerm = [  //สร้าง array obj เพื่อเก็บค่ารายวิชา
//     {
//         subjectID: 'GEN111',
//         subjectName: 'Man and Ethics of Living',
//         credit: 3,
//         grade: 'A',
//         score: 4
//     },
//     {
//         subjectID: 'INT103',
//         subjectName: 'Advance Programing',
//         credit: 3,
//         grade: 'C',
//         score: 2
//     },
//     {
//         subjectID: 'INT104',
//         subjectName: 'UX',
//         credit: 3,
//         grade: 'B+',
//         score: 3.5
//     },
//     {
//         subjectID: 'INT105',
//         subjectName: 'Basic SQL',
//         credit: 1,
//         grade: 'B+',
//         score: 3.5
//     },
//     {
//         subjectID: 'INT107',
//         subjectName: 'Platform',
//         credit: 3,
//         grade: 'A',
//         score: 4
//     },
//     {
//         subjectID: 'INT200',
//         subjectName: 'Data Structure',
//         credit: 1,
//         grade: 'C',
//         score: 2
//     },
//     {
//         subjectID: 'LNG332',
//         subjectName: 'Business Eng.',
//         credit: 3,
//         grade: 'B+',
//         score: 3
//     },
// ]

// let totalCredit = 0;
// let sumScore = 0;
// let gpaxTotal = 0;
// for (let scores of firstTerm) {
//     //sumScore(ผลรวมคะเเนน) = เอาเกรดที่เป็นตัวเลข * หน่วยกิต ในเเต่ละวิชา
//     sumScore = sumScore + (scores.score * scores.credit);
//     //totalCredit เอา credit เเต่ละรายวิชามาบวกกัน
//     totalCredit = totalCredit + scores.credit;
// }
// //funcntion หา gpa โดยการเอา sumScore / totalCredit เพิ่มมาใหม่เนื่องจากข้อ1ใหญ่อธิบายไม่ละเอียด
// function gpa(sumScore, totalCredit) {
//     let gpa = sumScore / totalCredit;
//     return gpa;
// }
// //เกรดผม 3 พอดีนะครับ
// // console.log(`GPA 2563/1 : ${gpa(sumScore, totalCredit)}`);

// for (let scores of secoundTerm) {
//     //sumScore(ผลรวมคะเเนน) = เอาเกรดที่เป็นตัวเลข * หน่วยกิต ในเเต่ละวิชา
//     sumScore = sumScore + (scores.score * scores.credit);
//     //totalCredit เอา credit เเต่ละรายวิชามาบวกกัน
//     totalCredit = totalCredit + scores.credit;
// }
// //funcntion หา gpa โดยการเอา sumScore / totalCredit เพิ่มมาใหม่เนื่องจากข้อ1ใหญ่อธิบายไม่ละเอียด
// function gpa(sumScore, totalCredit) {
//     let gpa = sumScore / totalCredit;
//     return gpa;
// }
// // console.log(`GPA 2563/2 : ${gpa(sumScore, totalCredit)}`);



// let totalCreditAll = 0;
// let totalCredit = 0;
// //เทอม 1 
// for (let credits of firstTerm) {
//     //เอา หน่วยกิตของเเต่ละวิชามาบวกกัน
//     totalCredit = totalCredit + credits.credit;
// }
// //สะสมหน่วยกิตจากเทอม 1
// totalCreditAll = totalCredit + totalCreditAll;
// console.log(`Credit Term 1 : ${totalCredit}`)

// totalCredit = 0;
// //เทอม 2
// for (let credits of secoundTerm) {
//     //เอา หน่วยกิตของเเต่ละวิชามาบวกกัน
//     totalCredit = totalCredit + credits.credit;
// }
// //สะสมหน่วยกิตจากเทอม 2 + เทอมที่เเล้ว
// totalCreditAll = totalCredit + totalCreditAll;
// console.log(`Credit Term 2 : ${totalCredit}`)

// console.log(`Total Credit : ${totalCreditAll}`)

//สร้างโปรแกรมที่ใช้คำนวณเกรดในแต่ละวิชา
const maxPoint = 100;
//สร้างฟังชั่นไว้เก็บค่าคะแนนเฉลี่ยสะสมของรายวิชานั้นๆ
function gpax(point) {
    switch (point != null && point <= maxPoint) {
        case point >= 80:
            var grade = 'A';
            break;
        case point >= 70:
            var grade = 'B';
            break;
        case point >= 60:
            var grade = 'C';
            break;
        case point >= 50:
            var grade = 'D';
            break;
        case point < 50:
            var grade = 'F';
            break;
    } //ใช้การswitch caseเพื่อหาค่าของเกรดของรายวิชา
    return grade;
};
let stdNattakit = gpax(70); //กำหนดค่าของเกรดเข้าไป
console.log(`Grade Chanon: ${stdNattakit}`);