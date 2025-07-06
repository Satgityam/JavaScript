const tinder_user = new Object();
tinder_user.id = 'viking';
tinder_user.name = 'samulDeSuja';
tinder_user.gender = 'male';
tinder_user.mail = 'sam2332@gmail.com';
// console.log(typeof tinder_user);
// console.log(tinder_user);
const insta_user = new Object();
insta_user.id = 'Vking';
insta_user.name = 'Panter';
insta_user.mail = 'Ptr123@gmai.com';
insta_user.Logined = false;
insta_user.logOut = true;
const spread_user = {...insta_user, ...tinder_user }; // spread operator
// console.log(spread_user);
const combine_object = Object.assign({}, insta_user, tinder_user);
// console.log(combine_object);
// console.log(insta_user==combine_object);
const object_array = [{
        id: 2332,
        name: "satyam",
        Email: 'satyam33838@gmail.com'
    },
    {
        id: 2332,
        name: "satyam",
        Email: 'satyam33838@gmail.com'
    },
    {
        id: 2332,
        name: "satyam",
        Email: 'satyam33838@gmail.com'
    },
    {
        id: 3232,
        name: "goluk",
        Email: 'kumar33838@gmail.com'
    }
]

Object.freeze(object_array);
console.log(Object.values(object_array[0] = object_array[3]));
console.log(Object.values(object_array[3]));
console.log(Object.values(object_array[0]));
console.log(Object.entries(object_array[0])); //return an 2 array one is key array and other is value array
console.log(object_array.hasOwnProperty('username'));
console.log(object_array[0].hasOwnProperty('id'));