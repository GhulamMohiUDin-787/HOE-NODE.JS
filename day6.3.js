// normal function
function myfunction(){
    console.log("Hello world how are u");
}
myfunction();
//arrow function
greet = ()=>{
console.log("hello world");
}
greet();
//  
setTimeout(
    ()=>{
        console.log("Arrow function used for set time out ")
    },2000);
 let a=10
 let b=11
 let sum=(a,b)=>{
    return(a+b);
 }
 console.log(sum(a, b));