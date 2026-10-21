console.log("STRING METHODS");
console.log("length");
const greeting = "hello and welcome";
const userName = "Ghulam Mohi U Din";
const age = 23;
console.log(greeting.length);
console.log(userName.length);
console.log("include");
const text1 = "I like mango";
const text2 = "Hello Ali";
const text3 = "I love Pakistan";
console.log("mango:", text1.includes("mango"));
console.log("Ahmed:", text2.includes("Ahmed"));
console.log("Pakistan:", text3.includes("Pakistan"));

console.log("concat");
const first = "Ghulam";
const last = "Mohi u Din";
const word1 = "Practice";
const word2 = "of Concat";
console.log(first.concat(" ", last));
console.log(first.concat(" ", word1));
console.log(first.concat(" ", last, " ", word1, " ", word2));

const role = "supervisor";
const supervisor = "is sir basit";
console.log(role.concat(" ", supervisor));

const from1 = "he is from";
const from2 = "karak";
console.log(from1.concat(" ", from2));

console.log("toUpperCase / toLowerCase");
const lowerName = "zain";
const upperCountry = "PAKISTAN";
const lowerWord = "hello";
console.log("zain:", lowerName.toUpperCase());
console.log("PAKISTAN:", upperCountry.toLowerCase());
console.log("hello:", lowerWord.toUpperCase());

console.log("indexOf");
const find1 = "I like mango";
const find2 = "Hello zain";
const find3 = "I like coffee";
const find4 = "hello house of elan";
const find5 = "hello sir basit";
console.log("mango:", find1.indexOf("mango"));
console.log("Ali:", find2.indexOf("Ali"));
console.log("coffee:", find3.indexOf("coffee"));
console.log("house:", find4.indexOf("house"));
console.log("sir basit:", find5.indexOf("sir basit"));
//
console.log("DAY 5: LOOPS");
console.log("FOR LOOP");
console.log("  Print Numbers");
for (let i = 1; i <= 5; i++) 
    console.log(i);
console.log("  Print Names");
for (let i = 1; i <= 5; i++) 
    console.log("Ghulam mohi u din");
console.log("  Count to 10");
for (let i = 1; i <= 10; i++) 
    console.log(i);
console.log("  Table of 2");
for (let i = 1; i <= 5; i++) 
    console.log("2 x " + i + " = " + 2 * i);
console.log("  Print Fruits");
for (let i = 1; i <= 3; i++)
     console.log("Apple");

console.log("WHILE LOOP");
console.log("  Print Numbers");
let w1 = 1;
while (w1 <= 5) {
     console.log(w1); w1++;
 }
console.log(" Print Names");
let w2 = 1;
while (w2 <= 3) {
     console.log("Ahmed"); w2++;
     }
console.log("  Count to 10");
let w3 = 1;
while (w3 <= 10) {
     console.log(w3); w3++;
     }
console.log("  Table of 3");
let w4 = 1;
while (w4 <= 5) 
    { 
        console.log("3 x " + w4 + " = " + 3 * w4); w4++; 
    }
console.log("  Print Fruits");
let w5 = 1;
while (w5 <= 3) { 
    console.log("Mango"); w5++; 
}
console.log("DO WHILE LOOP");
console.log("  Print Numbers");
let d1 = 1;
do { console.log(d1); d1++; 
} 
while (d1 <= 5);
console.log(" Print Names");
//
let d2 = 1;
do { console.log("Hassan"); d2++;
 }
 while (d2 <= 3);
console.log("  Count to 10");
//
let d3 = 1;
do { console.log(d3); d3++; 
} 
while (d3 <= 10);
console.log("  Table of 4");
//
let d4 = 1;
do { console.log("4 x " + d4 + " = " + 4 * d4); d4++; 
} 
while (d4 <= 5);
console.log("  Print Fruits");
//
let d5 = 1;
do { 
    console.log("movenpick"); d5++;
 }
 while (d5 <= 3);