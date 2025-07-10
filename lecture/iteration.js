// (for of) loop
["", "", ""]
[{}, {}, {}]

const arr = [1, 3, 5, 6, 6, 7]


// for(const element of object) -> object means jispe looop lg rha hai like array, string 
for (const val of arr) {
    // console.log(val)
}


// Map 
const myMap = new Map();
myMap.set(1, "Yash")
myMap.set(2, "Shashank")
myMap.set(3, "Abhijeet")


// console.log(myMap)

// for (const [roll, val] of myMap) {
//     // console.log(roll, ":-", val)
// }

// for of loop does not work with object

const myObject = {
        js: "JavaScript",
        cpp: "C++",
        c: "c",
        py: "python",
        java: "Java"
    }
    // for (const [key] of myObject) { // object is not iteratable through for of loop
    //     console.log(key)
    // }



// for in loop

for (const [key, val] in myMap) {
    console.log(key, ":--", val)
}



for (const key in myObject) {
    // console.log(`$ { key } is shortcut of $ { myObject[key]}`)
}