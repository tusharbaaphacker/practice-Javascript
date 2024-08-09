// let am=typeof e
// console.log(am);
// if(am=="boolean"){
// console.log("value is boolean");
// }else{
//     console.log("value is not boolean");
// }

// let a="30";
// let s=typeof a
// console.log(s);
// if(typeof a=="number"){
//     console.log("value is number");
// }else console.log("value is not number")

// let a=30;
// let b=2;
// let c=15;
// if (a/b==c){
// console.log("value is equal");
// }else
// console.log("value is not equal");

// let a=30
// let b=2
// let c=15
// let d= a/b
// if (d==c) {
//     console.log("value is equal");
// }else{
//     console.log("value is not equal");
// }    
// function stopclock(time){
//     let seconed=0;
//     const timec=  setInterval(()=>{
//         seconed=seconed+1;
//         console.log("time counter",parseInt(seconed/60)+":"+seconed%60);
//         if(parseInt(seconed/60)==time){
//             clearInterval(timec)
//         }
// },1000)
// }
// stopclock(1)


// function alarmclock(hr,minutes){
//     const checktime= setInterval(()=>{
//         const date=new Date();
//         console.log("checking time");
//     if (date .getHours()==hr&&date.getMinutes()==minutes&date.getSeconds()==0){
//         console.log("alerm ringing")
//         Play()
//     }
//     if (date.getHours()==hr&&date.getMinutes()>minutes){
//         clearInterval(checktime);
//         console.log("stop alerm");
//     }

//     },1000
// )
// }
// alertclock(12,12)


// function logic(email2,password2) {
// var email="ts12@gmail.com"
// let password="12345"
// if (!email2) { return "please enter your email"
// }
// if (!password) {return"password is wrong"

// } 
// function login() {
//     if (email=="email2") {
//         if (password==password2) { return"succesful login"
//         }else {
//             return "your password is wrong"}
//         }else{return "your email is not register"

//         }

//     }

// }
// console.log(logic("ts12@gmail.com","12345")());


// function counter(){
//     varcount=1;
//     return {
//         increment:function() (
//             count=count+4;
//             return count
//         ),
//         decrement:function ()(
//             if(count==0){
//                 return count
//             }else {
//                 count=count-4
//                 return count
//             }
//         ),
//         getcount:function(){
//             return count
//         }
//     }
// }
// let fun=counter();
// console.log(fun.increment);
// console.log(fun.increment);
// console.log(fun.increment);
// console.log(fun.increment);
// console.log(fun.decrement);
// console.log(fun.decrement);
// console.log(fun.decrement);
// console.log(fun.decrement);

// function add (a) {

//     var count=1
//     return{
//         increment:function (value) {
//             count=count+value
//             return count
//             },
//             multiply:function (value) {
//             if (count==1) {
//                 return ("chlaja bsdk")
//             } else
//                 count=count*value
//         return count},
//             divide:function (value) {
//             count=count/,
// }


function add() {
    var count = 0;
    return {
        increament: function (value) {
            count = count + value
            return count
        },

        multiply: function (value) {
            count = count * value
            return count
        },
        divide: function (value) {
            count = count / value
            return count
        },
        deacrement: function (value) {
            count=count - value
            return count
        },
    }
}
let fun=add()
console.log( fun.increament(10));
console.log(fun.deacrement(2));
console.log(fun.divide(2));
console.log(fun.multiply(4));
function (value) {
    count=count
   return count
}