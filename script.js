// // // 1.-------------
// // let arr = [1,2,3,4,5];
// // let b=1
// // for(i=0; i<arr.length;i++){
// //     b*=arr[i]
// // }
// // console.log(b)

// // // 2.---------------
// // let arr1 = [1,2,3,4,5];
// // let c=0
// // for(i=0; i<arr1.length;i++){
// // c+=arr1[i]
// // }
// // console.log(c)


// function Add(n,arr){
//     let sum=0;
//     for(i=0; i<n;i++){
//         sum+=arr[i]
//         }
//         return sum
// }
// let arr1 = [1,2,3,4,5];
// let n =arr1.length;
// console.log(Add(n,arr1))

// // 3.---------------
// function Findcount(N,K,A){
//     let count = 0;
//     for (let i = 0; i<N; i++){
//         if(A[i]===K){
//             count++
//         }
//     }
//     return count;
// }
// const arr2 =[3,3,3,3,1,2];
// const N =arr2.length;
// const K = arr2[0];
// const A = arr2.slice(1);
// console.log(Findcount(N,K,A))



// // // // 4.-----------------
// // let arr2 = [1,2,3,4,5,6,7]
// // let oddsum=0;
// // let evensum=0;
// // for(i=0; i<7;i++){
// //  if(arr2[i]%2 == 0){
// //     oddsum+=arr2[i]
// //  }
// //  else if(arr2[i]%2 !== 0){
// //     evensum+=arr2[i]
// //  }
// // }
// // console.log(oddsum)
// // console.log(evensum)

// // 5.-----------------------
// // let d = prompt(Number("enter here"));
// // let arr3 =[1,2,3,4,5,6,7,8,9];            puchhna hai?
// // // arr3.split("")
// // // console.log(arr3)
// // // let yes ="yes"
// // // let not ="not"
// // for(i=0; i>arr3.length; i++){
// //     if(d===arr3[i]){
// //     console.log("yes")
// //     }
// //     else if( d!==arr3[i]){
// //         console.log("not")
// //     }
// // }

// // 6.---------------------
// // let  e= [6,11,23,3,45,72,68]
// // var highage = 0;

// // for (let i = 0; i < e.length; i++) {
// //   if (e[i] > highage ) {
// //     highage = e[i];
// //   }
// // }
// // console.log(highage);


// // 7.--------------------

let arr5=[1,2,3,4,5]
for (let i =0; i<arr5.length;i++){
    arr5[i] += 1;
}
console.log(arr5)

// // 9.---------------------------
// let arr=[6 ,3 ,2, 4, 1, 2, 3]
// let res;
// for (let i =0; i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             res=arr[i]
//             break;

//         }
//     }
//     if(res!==undefined){
//         break;
//     }
// }
// console.log(res+" reapetetion")


// // 10.
// let e =[66 ,33, 11, 44, 66, 22, 77]
// var highestno = 0;
// // var lowestno;
// for (let i = 0; i < e.length; i++) {
//   if (e[i] >  highestno ) {
//      highestno = e[i];
//   }
// }
// var lowestno = highestno;
// for (let i = 0; i < e.length; i++) {
//   if (e[i] < lowestno ) {
//     lowestno = e[i];
//   }
// }


// console.log("higest no is "+ highestno + ", and  lowest no is " +  lowestno);