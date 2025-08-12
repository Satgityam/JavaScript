const promiseOne = new Promise(function(resolve, reject) {
    // do any asyn task 
    // DB call, cryptography, network 
    setTimeout(function() {
        console.log('Async task is complited');
        resolve()

    }, 1000)

})
promiseOne.then(function() {
    console.log('promise is complited');

})



new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Asyn2 task is complited');
        resolve();

    }, 1000)

}).then(function() {
    console.log('promise2 is complited');

})



const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Asyn task three');
        resolve({ name: "satyam", mail: 'kumar@gmail.com' })

    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);

})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ name: 'satyam kumar', mail: 'satyam@gmail.com' })
        } else {
            reject('Error: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.name
}).then((username) => {
    console.log(username);
}).catch((error) => console.log(error))