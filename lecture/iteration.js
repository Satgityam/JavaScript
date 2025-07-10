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
    // console.log(key, ":--", val)
}



for (const key in myObject) {
    // console.log(`$ { key } is shortcut of $ { myObject[key]}`)
}

// for each loop


const names = ["satyam", "kumar", "karan", "taran"]
    // names.forEach((name) => { console.log(name) })
    // names.forEach((name) => (
    //     console.log(name)
    // ))
function printme(names) {
    // console.log(names)
}


names.forEach((name, ind, arr) => {
    console.log([name, ind])

    // console.log(arr)

})


/// using a datasets and for applying  forEach loop and finding relevent data
const mobileItems = [{
        id: 1,
        brand: "Apple",
        model: "iPhone 14 Pro",
        price: 1299,
        specs: {
            display: "6.1 inch OLED",
            processor: "A16 Bionic",
            ram: "6GB",
            storage: "128GB",
            battery: "3200mAh",
            camera: "48MP + 12MP"
        }
    },
    {
        id: 2,
        brand: "Samsung",
        model: "Galaxy S23 Ultra",
        price: 1199,
        specs: {
            display: "6.8 inch AMOLED",
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: "256GB",
            battery: "5000mAh",
            camera: "200MP + 12MP + 10MP"
        }
    },
    {
        id: 3,
        brand: "OnePlus",
        model: "11R",
        price: 499,
        specs: {
            display: "6.7 inch AMOLED",
            processor: "Snapdragon 8+ Gen 1",
            ram: "8GB",
            storage: "128GB",
            battery: "5000mAh",
            camera: "50MP + 8MP + 2MP"
        }
    },
    {
        id: 4,
        brand: "Xiaomi",
        model: "Redmi Note 13 Pro+",
        price: 299,
        specs: {
            display: "6.67 inch AMOLED",
            processor: "Dimensity 7200-Ultra",
            ram: "8GB",
            storage: "256GB",
            battery: "5000mAh",
            camera: "200MP + 8MP + 2MP"
        }
    },
    {
        id: 5,
        brand: "Realme",
        model: "GT Neo 3",
        price: 399,
        specs: {
            display: "6.7 inch AMOLED",
            processor: "Dimensity 8100",
            ram: "8GB",
            storage: "128GB",
            battery: "4500mAh",
            camera: "50MP + 8MP + 2MP"
        }
    }
];
mobileItems.forEach((mobile) => {
    console.log([mobile.brand, mobile.model, mobile.specs.ram, mobile.specs.storage, mobile.specs.battery])


})