
let arr1 = ['B', 'a', 'b', 'e', 'l', 'C', 'o', 'd', 'e', 'r']
arr1.forEach((char) => console.log('=>', char))


let arr2 = ['B', 'a', 'b', 'e', 'l']
arr2.forEach((element, index, array) => {
    console.log(element, index, array)
    return element
})


// ForEach ไม่สามารถ Return ผลลัพธ์ ออกมาได้ ถ้า Return ออกมาจะเป็น undefined