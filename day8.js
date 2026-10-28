// Day 2 from strings
let boy1="zain";
let boy2="ali";
let combo=`${boy1} is a friend of ${boy2}`
console.log(combo)
console.log(boy1.replace("zain","ghulam mohi u din"))
let combo2=`${boy1} is a friend of ${boy2}`
console.log(combo2);
// day 2 array
let a=[12,13,14,15,"ali","mariam","laiba"]
console.log(a)
 a[6]="laiba khan";
console.log(a[6])
console.log(a)
// array practice 
let com=["house of elan", 100-150 , "employes"]
console.log (com[0].concat (com[2]))
let i=com
 for(i=0;i<=2;i++){
console.log(com[i])
 }
let c=com.join("-")
console.log(c, typeof c)
 //
 {
const num=[1,2,3,4,5]
const double=num.map(num=>num*2);
console.log(double)
 }
{
const num1 =[1,2,3,4,5,6,7,8];
const even=num1.filter(num1=>num1%2===0)
console.log(even)
}
{
const num1 =[1,2,3,4,5,6,7,8,32,54,765,435];
const even=num1.filter(num1=>num1%2!==0)
console.log(even)
}
 {     
const num1 =[1,2,3,4,5,6,7,8,32,54,765,435];
const sliced=num1.slice(2,8)
console.log(sliced)
 }
 {
const   num1 =[1,2,3,4,5,6,7,8,32,54,765,435];
num1.forEach((num1)=>{
console.log(num1)
});
 }

