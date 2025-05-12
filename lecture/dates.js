// const date_time=console.log("data and time");
// let myDate=new Date();
// console.log(myDate.toString());
// console.log("toJSON ->"+ myDate.toJSON());
// console.log("toDateString ->"+ myDate.toDateString());
// console.log("toLocalDateString() ->"+ myDate.toLocaleDateString());
// console.log("toTimeString ->"+ myDate.toTimeString());
// console.log("toUTCString ->"+ myDate.toUTCString());
// console.log("toISOString ->"+ myDate.toISOString());
// console.log(typeof(myDate));
// randomly we can decide the date and time 
let randomDate=new Date(2025, 0, 25,12,45);
console.log(randomDate.toLocaleString());
let Date1=new Date("12-12-2012");
console.log(Date1.toLocaleString());
console.log(randomDate.getMonth());

// use of Date.now() -> it gives milisecon from starting(1 jan 1970)
// let Time_Date= Date.now();
// console.log(Time_Date);
// console.log(Math.floor(Time_Date/1000));
