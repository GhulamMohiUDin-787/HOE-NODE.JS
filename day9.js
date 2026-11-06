const students = [
    {
        name: "Alice",
        age: 20,
        major: "Computer Science"
    },
    {
        name: "Bob",
        age: 22,
        major: "Mathematics"
    },
    [{
        name: "Charlie",
        age: 21,
        major: "Physics"
    }]
];
// students[2].name="ali"
console.log(students[2][0].name="abc")


// for(let i=0; i<students.length;i++){
//     // console.log(students[i])
//     console.log("running times")
//     for(let key in students[i]){
//         // console.log(key)
//         console.log("inside loop running times")
//         // console.log(`${key}:${students[i][key]}`)
//     }
// }