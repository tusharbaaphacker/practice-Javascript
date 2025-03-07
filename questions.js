let mxlength = (str)=>{
    let newarr=str.split('')
    let obj={}
    let length=0
    let flag = false
    for(let i = 0;i<newarr.length;i++){
        if (obj[newarr[i]]){
            obj[newarr[i]]++
        }else{
            obj[newarr[i]]=1
        }
    }
    for (let key in obj){
        if (obj[key]%2==0){
            length+=obj[key]
        }else{
            length+=obj[key]-1
            flag=true
        }
    }if(flag){
        length++
    }
return length

}

let str ='abccccdd';
console.log(mxlength(str));

// merge without extra space

// let mergewithoutspace(str1,str2)=>{

// }

// let str1=[1,3,5,7];
// let str2 =[0,2,6,8,9];

//set pointer in array


// let buyandsell=(arr)=>{
//     let maxprofit=0
//     let minprice=arr[0]
//     for(let i=1;i<arr.length;i++){
//         minprice = Math.min(minprice,arr[i])
//         maxprofit = Math.max(maxprofit,arr[i]-minprice)
//     }
//     return maxprofit
// }

// let arr=[7,1,5,3,6,4]
// console.log(buyandsell(arr));


// let ispaildrome=(str)=>{
//     let map={};
//     for(let char of str){
//         if(map[char]){
//             map[char]++
//         }else{
//             map[char] = 1
//         }
//     }
//     let oddcount=0
//     for(let char in map){
//         if(map[char]%2!==0){
//             oddcount++
//             if(oddcount>1){
//                 return false
//             }
//         }
//     }
//     return oddcount<=1
// }

// let str='abccccdd';
// console.log(ispaildrome(str));


// max and minimum

// let findmin_mx=(arr)=>{
// let mx=arr[0]
// let min=arr[0]
// for (let i = 0; i<arr.length;i++) {
// if (arr[i]>mx) {
// mx=arr[i]
// }else if (arr[i]<min) {
// min=arr[i]
// }
// }
// return [mx,min]
// }
// let arr=[1,2,3,4,5]
// console.log(findmin_mx(arr))

// best time to buy and sell stock

// let buyandsell = (arr) => {
// let min = arr[0];
// let max = 0;
// for (let i = 0;i< arr.length;i++) {
// min = Math.min(min, arr[i]);
// let profit = arr[i] - min;
// maxProfit =Math.max(max, profit);
// }
// return max;
// };
// let arr = [7, 1, 5, 3, 6, 4];
// console.log(buyandsell(arr));

//merge two array without space

// let mergearr = (arr1, arr2) => {
// let a=arr1.length;
// let b=arr2.length;
// let i=0
// let j=0
// while(i<a){
// if(arr1[i]>arr2[j]){
// [arr1[i],arr2[j]] =[arr2[j],arr1[i]]
// }i++
// }
// let newarr=arr1.concat(arr2).sort((a,b)=>a-b)
// return newarr
// }
// let arr1 = [1, 3, 5, 7];
// let arr2 = [0, 2, 6, 8, 9];
// console.log(mergearr(arr1, arr2));


// let myPromise = new Promise((resolve, reject) => {
//     let success = true; 

//     setTimeout(() => {
//         if (success) {
//             resolve("काम पूरा हो गया!");
//         } else {
//             reject("काम फेल हो गया!");
//         }
//     }, 2000);
// });

let a=false 

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (a) {
            resolve("a is resolved");
        } else {
            reject("a is rejected");
        }
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
