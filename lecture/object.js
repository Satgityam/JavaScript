// singleton

// object literals

const user={

    name:"satyam",
    age:24,
    mail:"mcs24040@iiitl.ac.in",
    isLogined:false,
    lstLogined:['monday','sunday']
}
// console.log(user.mail);
// console.log(user["age"]);
// Object.freeze(user);// it don't allow changing into the Object  
user.mail='satyam16072001@gmail.com';
// console.log(user.mail);

user.gretting=function(){
    console.log('hello everyone i"m here.');
}
 console.log(user.gretting());
// console.log(user.gretting);