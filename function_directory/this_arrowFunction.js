// const user = {
//         name: "satyam",
//         email: "asaldjlsdjf@gmai.com",
//         welcome: function() {
//             console.log(`welcome ${this.name} to the js world`)
//             console.log(this)
//         }


//     }
// console.log(this)
// console.log(user)
// user.name = "sam"
// console.log(user)
// user.welcome()
//     // console.log(this)
// function dummy() {
//     console.log("dummy function called ")
//     console.log(this)


// }

// const dummy = function() {
//     console.log("dummy function called ")
//     console.log(this)

// }

// const jsfun = () => {
//     console.log("dummy function called ")
//     console.log(this)

// }


// jsfun()


//. ------------<>-----------
// arrow function
// const fub = (n) => {
//     a = 0, b = 1, c = 0;
//     if (n == 0) return a
//     if (n == 1) return b
//     for (i = 2; i <= n; i++) {
//         c = a + b
//         b = a
//         a = c
//     }
//     console.log(this)
//     return a
// }

// console.log(fub(4))
// const add = (a, b) => (a + b)    no return needed 
// console.log(add(2, 3))


// const Add = (a, b, c) => { // if we use curly braces , we need to use return statement
//     return a + b + c
// }
// console.log(Add(2, 3, 4))


// Immediately Invoked Function Expression (IIFE). 


// This is a function thatr runs as soon as it is defined.

// IIFE named function
(function chai(name) {
    console.log(`chai is ready and DB is connected with ${name}`)
})("satyam");



// IIFE anonymous function
(() => {
    console.log("I am an IIFE function");
})();