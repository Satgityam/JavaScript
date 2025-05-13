const tinder_user=new Object();
tinder_user.id='viking';
tinder_user.name='samulDeSuja';
tinder_user.gender='male';
tinder_user.mail='sam2332@gmail.com';
// console.log(typeof tinder_user);
// console.log(tinder_user);
const insta_user=new Object();
insta_user.id='Vking';
insta_user.name='Panter';
insta_user.mail='Ptr123@gmai.com';
insta_user.Logined=false;
insta_user.logOut=true;
const spread_user={...insta_user,...tinder_user};// spread operator
// console.log(spread_user);
const combine_object=Object.assign({},insta_user,tinder_user);
// console.log(combine_object);
// console.log(insta_user==combine_object);
const object_array=[
    {
        id:2332,
        name:"satyam",
        Email:'satyam33838@gmail.com'
    },
    {
        id:2332,
        name:"satyam",
        Email:'satyam33838@gmail.com'
    },
    {
        id:2332,
        name:"satyam",
        Email:'satyam33838@gmail.com'
    },
    {
        id:2332,
        name:"satyam",
        Email:'satyam33838@gmail.com'
    }
]