// 
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Ghulam Mohi u Din")); 
//
function add(a, b) {
  return a + b;
}
console.log(add(5, 6));  

//  
function square(num) {
  return num * num;
}
console.log(square(6)); // 36

//  
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOdd(7));  

//  
function findMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(findMax(10, 25));  
//
function rectangleArea(length, width) {
  return length * width;
}
console.log(rectangleArea(5, 4));  

//  
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(toFahrenheit(30));  

//  
function checkResult(marks) {
  if (marks >= 40) {
    return "Pass";
  }
  return "Fail";
}
console.log(checkResult(55));  

//  
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("zain"));  

//  
function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4]));  

//  
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Javascript"));  

//  
function largestNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largestNumber([4, 9, 2, 15, 7])); 

//  
function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}
console.log(isPalindrome("madam"));  
console.log(isPalindrome("hello"));  

//  
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
}
printTable(5);

//  
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
console.log(isLeapYear(2024));  

//  
function getGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 60) return "C";
  if (marks >= 40) return "D";
  return "F";
}
console.log(getGrade(82));  

// 
const double = (num) => num * 2;
console.log(double(8));   

//  
function welcome(name = "Guest") {
  return "Welcome, " + name;
}
console.log(welcome());  
console.log(welcome("Ghulam Mohi u din"));  

//  
function doubleAll(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}
console.log(doubleAll([1, 2, 3])); 