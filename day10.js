let apps =["intsa","snapchat","vsco"]
console.log(apps)
let app1 =
{ 
    socialmedia : "snapchat",
    socialmedia2:"insta",
    socialmedia3:"tenup"
}
console.log(app1);
for(let  key in app1){
    console.log(app1[key]);
}
//
let students={
    inter1:"ali",
    inter2:"laiba",
    inter3:"mariam",
    inter4:"wajih",
    inter5:["Ghulam mohi u din","ali abbas"]
}
console.log(students)
for(let key in students){
    console.log(students[key])
}
console.log(students.inter5)
//
let house={
    email:"zainalikhan7822@gmail.com",
    company:"House of elan",
   supervisor:{
    name:"Sir basit",
    domain:"develpoer"
   }
}
console.log(house.supervisor)
 for (let key in house.supervisor){
    console.log(key,house.supervisor[key])
 }
