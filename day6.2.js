 
const greet = (name) => {
  return "Hello " + name;
};
console.log(greet("Ghulam Mohi u Din"));  
 
const add = (a, b) => a + b;
console.log(add(5, 3)); 
 
const square = (num) => num * num;
console.log(square(6));  

//  
const checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(checkEvenOdd(7)); // Odd

//  
const findMax = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(findMax(10, 25)); // 25

//  
const rectangleArea = (length, width) => length * width;
console.log(rectangleArea(5, 4)); // 20

//  
const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
console.log(toFahrenheit(30)); // 86

//  
const checkResult = (marks) => {
  if (marks >= 40) {
    return "Pass";
  }
  return "Fail";
};
console.log(checkResult(55)); // Pass

//  
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello")); // olleh

//  
const sumArray = (numbers) => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
};
console.log(sumArray([1, 2, 3, 4])); // 10

//  
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};
console.log(factorial(5)); // 120

//  
const countVowels = (str) => {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("Javascript")); // 3

// 13. Largest number in an array
const largestNumber = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(largestNumber([4, 9, 2, 15, 7])); // 15

// 14. Palindrome check
const isPalindrome = (word) => {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
};
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// 15. Multiplication table
const printTable = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
};
printTable(5);

// 16. Leap year check
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};
console.log(isLeapYear(2024)); // true

// 17. Grade calculator
const getGrade = (marks) => {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 60) return "C";
  if (marks >= 40) return "D";
  return "F";
};
console.log(getGrade(82)); // B

// 18. Double
const double = (num) => num * 2;
console.log(double(8)); // 16

// 19. Default parameter
const welcome = (name = "Guest") => "Welcome, " + name;
console.log(welcome()); // Welcome, Guest
console.log(welcome("Ghulam")); // Welcome, Ghulam

// 20. Double every number in an array
const doubleAll = (numbers) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
};
console.log(doubleAll([1, 2, 3])); // [ 2, 4, 6 ]