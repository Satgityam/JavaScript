const names = ["satyam", "kumar", "karan", "taran"]

const newNames = []
    // console.log(newNames)
const values = names.forEach((name) => {
        newNames.push(name)

    })
    // console.log(newNames)


// filter--->working in same way like forEach loop but it retuen value
// const val = console.log(names[0]);   // it does not return anything  when console val it gives undefined
// console.log(val)
const Nvalues = names.filter((name) => { return name })
    // console.log(Nvalues)


// dataSet
const books = [{
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        price: 299,
        publishedYear: 1988
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-help",
        price: 450,
        publishedYear: 2018
    },
    {
        id: 3,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        genre: "History",
        price: 550,
        publishedYear: 2011
    },
    {
        id: 4,
        title: "The Lean Startup",
        author: "Eric Ries",
        genre: "Business",
        price: 399,
        publishedYear: 2011
    },
    {
        id: 5,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        price: 249,
        publishedYear: 1949
    },
    {
        id: 6,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 299,
        publishedYear: 1960
    },
    {
        id: 7,
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        genre: "Finance",
        price: 350,
        publishedYear: 1997
    }
];
const chepBook = books.filter((book => book.price <= 300))
    // console.log(chepBook)
let author = []
chepBook.forEach((book) => {
    author.push(book.author)
})

// console.log(author)



// map  this is used for iteration and it return aultered array ----> it is not Map DS

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // newArray = newArray.map((num) => { return num * num }).filter((num) => num > 30)
    // console.log(newArray)
let initialval = 0



// reduce    arr.reduce( () => (), iniVal ) return total val after addition 
const newTotal = newArray.reduce((acu, currVal) => {
        // console.log([acu, currVal])
        return acu + currVal

    }, 0)
    // console.log(newTotal)


//--------
const totalBookPrice = books.reduce((accu, item) => accu + item.price, 0)
console.log(totalBookPrice)