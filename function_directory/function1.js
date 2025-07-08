function myfun() {
    console.log("this is my function for js");
}

function sayMyname() {
    console.log("my name is satyam kumar");
}
// myfun;
// sayMyname();
// myfun();
function calculateCartPrice(num1, num2, ...num) {
    return num;
}
// console.log(calculateCartPrice(200, 3003, 2030, 3030, 4040, 5005));


// passing object as parameter
const user = {
    name: "Satyam",
    email: "satyam16072001@gmail.com",
    loggedIn: true,
}

function userInfo(anyUser) {
    console.log(`User name is ${anyUser.name} and Email is ${anyUser.email} and logged in status is ${anyUser.LoggedIn}`);
    return;
}
(userInfo(user));

console.log(user.loggedIn);