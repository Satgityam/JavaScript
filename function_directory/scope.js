let a = 20;
const b = 30;
// var c=40;
if (true) {
    let a = 50;
    const b = 40;

    // console.log("inner a is ", a);
    // console.log("inner b is ", b);
}
// console.log(a);
// console.log(b);




// -----------<>------------

console.log(addTwoNumber(2, 3))


function addTwoNumber(num1, num2) {
    return num1 + num2
}


// console.log(addThreeNUmber(2, 3, 5));  can't call before declaration only when we declear a function like below
const addThreeNUmber = function(num1, num2, num3) {
    return num1 + num2 + num3
}
console.log(addThreeNUmber(2, 3, 5))