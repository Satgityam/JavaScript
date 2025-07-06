const user = {
        name: "satyam",
        email: "asaldjlsdjf@gmai.com",
        welcome: function() {
            console.log(`welcome ${this.name} to the js world`)
            console.log(this)
        }


    }
    // console.log(this)
    // console.log(user)
    // user.name = "sam"
    // console.log(user)
user.welcome()
console.log(this)