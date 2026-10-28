const numbers = [1, 2, 3, 4];
const doubled = numbers.filter(num => num%2==0);
console.log(doubled); 



// let numbers = [12, 45, 7, 89, 23];
// function sumArray(arr) {
//      let y=0;
//       let a=arr.sort()
//       console.log("the result",a)

// //    for(let i=0;i<arr.length; i++){
// //     console.log("the reslt of y:",y," ", arr[i], " ", i)
// //      if (y<arr[i]){
// //         console.log(`checking value ${y} for y if true`)
// //         y=arr[i];
        
// //      }
     
// //    }
//     return y
// }
// console.log(sumArray(numbers));

let numb = [5, 12, 8, 20, 15, 3];
function countGreater(arr) {
let count = 0
for (let i = 0; i < arr.length; i++) {
if (arr[i] > 10) {
count++
}
}
    return count
}
console.log(countGreater(numb));   