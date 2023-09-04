'use strict';
// let msg = "New Change"
// console.log(msg);
// // if (msg === "New Change") alert("Hello")
// console.log("4 + 5 =", 4 + 5)
// let age = 23
// const fName = "Adnan"
// console.log(age, fName)

// let strng = " I'm " + fName + " " + age + " years old";
// let strngNew = `I'm ${fName} ${age} years old`;

// console.log(strng)
// console.log(strngNew)

// console.log(`regular string....`);
// let a = "3";

// let b = 12;
// console.log(a + b)
// console.log(Number(a) + b)
// console.log("3" / "4")

//Intercation Functions with Modal Window
// alert("Welcome to our Page");
// let isOldEnough = confirm("You Must be 20+ to apply for DL");
// let agePrompt = prompt("What is Your Age?", [20]);
// if (isOldEnough && agePrompt >= 20) {
//     console.log("Proceed to next page please!")
// } else {
//     console.log(`Please wait for ${20 - agePrompt} years to apply`);
// }

// let a;
// let b = null
// console.log(Boolean(a))
// console.log(Boolean(b))
// console.log(String(a))
// console.log(String(a))
// let c = 2;
// let d = 2++;
// console.log(d)
// console.log('' == false)
// console.log(' ' == true)

// const date = 8
// switch (date) {
//     case 10:
//         console.log("Complete Section 3!")
//         break
//     case 11:
//         console.log("If U didn' complete section 3 upto now the u'r in trouble!!!!")
//         break
//     case 9:
//     case 8:
//         console.log("Work on section 2 & 3. Its Pending. Be responsible.Pleasee!!!")
//         break
//     default:
//         console.log("Complete task on time always.")

// }
// let a = "1";
// let b = 0;

// switch (+a) {
//     case b + 1:
//         alert("this runs, because +a is 1, exactly equals b+1");
//         break;

//     default:
//         alert("this doesn't run");
//  }

// let s;
// function myName(name, age) {
//     console.log("This function returns name, Age, Profession")
//     const myName = name
//     const myage = age
//     const prof = myProfession("Software Engineer")
//     return myName + " " + myage + " " + prof
// }

// function myProfession(prof) {
//     console.log("shows my profession")
//     return prof
// }

// const first = myName("Mohammad Adnan", 23)
// // const second = myName(24)
// console.log(first)
// console.log(second)

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Do you have permission from your parents?');
//     }
// }

// let age = prompt('How old are you?', 18);

// if (checkAge(age)) {
//     alert('Access granted');
// } else {
//     alert('Access denied');
// }

// console.log(showPrimes(5))

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {

//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }

//         console.log(i); // a prime
//     }
// }

// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//     () => alert('Hello!') :
//     () => alert("Greetings!");

// welcome();

// let age = prompt("What is your age?", 18);

// (age < 18) ? alert('Hello!') : alert("Greetings!");

// welcome;

// string = im cool;

// const str = "I am cool";
// str.split(" ").reverse()
// let newStr = " ";
// // newStr = str.split(" ").reverse().join(" ");
// // console.log(newStr)
// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];

// }

// console.log(newStr)

// let a = "c"
// let b = "c"
// let found = a.length + b.length
// function findAnagram(string1, string2) {
//     for (let i = 0; i < string1.length; i++) {
//         console.log("In loop 1")
//         let temp1 = string1.charAt(i)
//         console.log(temp1)
//         if (string2.search(temp1)) {
//             let res = string2.search(temp1)
//             console.log(res, i)
//             found--
//         }

//     }
//     for (let i = 0; i < string2.length; i++) {
//         console.log("In loop 2")
//         let temp2 = string2.charAt(i)
//         if (string1.search(temp2)) {
//             let res1 = string2.search(temp2)
//             console.log(res1, i)
//             found--
//         }

//     }
//     return found
// }

// const result = findAnagram(a, b)
// console.log(result)

// String Methods
// const str = "I am Cool";
// // 1. Search
// // 1. includes("string") - Return T if found, case sensitive
// console.log(str.includes("cool"))

// // 2. charAt(index) - Return element at specified position
// console.log(str.charAt(0))

// // 3. at(index) - Return element at specified position
// console.log(str.at(0))

// // 4. indexOf("string") - return index of first occurence, index of first word of  string
// console.log(str.indexOf("am"))

// // 5. lastIndexOf() - return index of last occurence, index of first word of string
// console.log(str.lastIndexOf("am"))

// // 6. startsWith("string") - return T if the string starts with given string, only check starting/beginning letters
// console.log(str.startsWith("I"))

// // 7. endsWith("string") - return T if the string ends with given string, only check last/end letters
// console.log(str.endsWith("l"))

// // 8. stringName[i] - return ith element of string
// console.log(str[2])

// // 2. Return String from index to index
// // 1. subString(strtIndex, endIndex) - Return part of given String, exculde end index
// console.log(str.substring(2, 6))

// // 2. slice(strtInd, endInd) - Return part of given String, can aslo take negative values, exculde end index
// console.log(str.slice(2, 4))


// // 3. Manipulation & String conversion to Array
// // 1. replace(/toReplace/, "replaceWith") - replace part of a string, only first match, have to use RegExp argunment "/abc/""
// const str2 = str.replace(/Cool/, "Gfg")
// console.log(str2.valueOf())
// console.log(str.valueOf())
// const str3 = str2.replace(/am/, "gfg")

// // 2. replaceAll("toReplace", "replaceWith") - replace part of a string, replace all matches, no RegExp argument needed
// console.log(str3.replaceAll("gfg", "AbAb"))
// console.log(str3.valueOf())

// // 3.split(delimiter) - split a given string acc to deleimiter provided, and convert it into an array
// //Conversion of String to Array
// console.log(str.split(" "))
// console.log(str.split("am"))

// // 4. trim() -Remove the white spaces from both ends of the given string.
// console.log(str.trim())

// let st = '12,54,232';
// st = st.split(',').join();
// console.log(st);




// # Objects
// let me = {
//     name: "Adnan",
//     age: 23

// };

// //set
// // me[isMale] = true
// me.isHappy = true
// //get
// // console.log(me[isMale])
// // me[isMale]++
// // console.log(me[isMale])
// console.log(Object.entries(me))
// //delete
// // delete me["is Male"]

// let key = "name";
// console.log(me.key)
// console.log(me[key])


// pgm to find duplicates in a string
// function findDuplicates(inputString) {
//     const obj = {};
//     const duplicates = [];

//     for (const char of inputString) {
//         if (obj[char]) {
//             obj[char]++;
//             if (obj[char] === 2) {
//                 duplicates.push(char);
//             }
//         } else {
//             obj[char] = 1;
//         }
//     }

//     return duplicates;
// }

// const input = "hello world";
// const duplicateChars = findDuplicates(input);
// console.log(duplicateChars); // Output: ["l", "o"]

// const obj = {};
// const arr = [1, 1, 2, "x", 3, 4, 5, "x"]
// const arr2 = []

// // console.log(obj[value])
// for (const value of arr) {
//     if (obj[value]) {
//         obj[value]++
//         if (obj[value] === 2) {
//             arr2.push(value)
//         }
//     } else {
//         obj[value] = 1
//     }

// }


// console.log(obj)
// console.log(arr2)
//  Elements of array are going in as Keys
// Their values are set in  else condition







// const arr = [1, 2, 4, 3, 2, 4, 5]
// const obj = {}
// const arr2 = []


// for (const element of arr) {

//     if (obj[element]) {
//         obj[element]++
//         if (obj[element] > 1) {
//             arr2.push(element)
//         }
//     } else {
//         obj[element] = 1
//     }
//     console.log(obj[element])
// }

// console.log(arr2)








// const obj1 = {
//     age: 23
// };

// console.log(obj1.age);
// console.log(obj1['age']);

// const age = "age";
// console.log(obj[age]);

// Anagram Strings
// const str1 = "abcd"
// const str2 = "abcdfg"
// let count = 0
// const obj1 = {}
// const obj2 = {}
// for (const char of str1) {
//     if (obj1[char]) {
//         obj1[char]++
//     } else {
//         obj1[char] = 1
//     }
// }

// for (const char of str2) {
//     if (obj2[char]) {
//         obj2[char]++
//     } else {
//         obj2[char] = 1
//     }
// }

// for (const char in obj1) {
//     if (!obj2[char]) {
//         count += obj1[char]
//     } else {
//         count += Math.abs(obj1[char] - obj2[char])
//     }
// }

// for (const char in obj2) {
//     if (!obj1[char]) {
//         count += obj2[char]
//     }
// }

// console.log(count)



// const str = "Mohammad, 12456 Adnan"
// const arr = str.split("").sort();
// console.log(arr)
// console.log(arr[0])

//Two Sum
// const twoSum = function (nums, target) {
//     const number = [];
//     const length = nums.length - 1;
//     let i = 0;
//     while (i < length) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 number.push(i);
//                 number.push(j);
//                 return number;
//             } else {
//                 continue;
//             }

//         }
//         i++;
//     }
// };

// const nums = [1, 2, 3, 6]
// const target = 9
// const res = twoSum(nums, target)
// console.log(res);

//Length of longest Substring without repeating


// const lengthOfLongestSubstring = function (s) {
//     const arr = s.split("")
//     // const obj = {}
//     let l = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//         let len = 0;
//         console.log("In Outer " + arr[i])
//         inner: for (let j = i + 1; j < arr.length; j++) {
//             console.log("    In Inner " + arr[j])
//             if (arr[i] !== arr[j]) {
//                 len++
//                 console.log("      inner" + len)
//             } else {
//                 break inner;
//             }
//         }
//         if (len > l) {
//             l = len;
//             console.log("      outer" + l)
//         }
//     }

// console.log(arr)
// for (const char of arr) {
//     if (!obj[char]) {
//         obj[char] = 1
//         len++
//     } else {
//         break
//     }
// }
//     return l

// };

// const s = "pwwkew"
// const res = lengthOfLongestSubstring(s)
// console.log(res)



// function calcAge(birthYear) {
//     console.log(2023 - birthYear)
// }

// const obj = {
//     name: "xyz",
//     birthYear: 2001,

//     ageCalc: function (currentYear) {
//         console.log(currentYear - this.birthYear)
//     }

// }


// calcAge(2001)
// obj.ageCalc(2023)


// Setting Default Value in a function parameter
// function abc(a, b = 1, c) {
//     console.log(a, b, c)
// }
// abc(4, undefined, 3)

// on.hello()

// const arr = [1, 2, [3, 4]]
// const [a, b, [c, d]] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// const person = {
//     name: "Adnan",
//     age: 25,
//     po: 21,
//     learn() {
//         console.log("I am a student")
//     }
// };



// Optional Chaining and nullish coalesing operator
// 1. property
// const v = person?.name?.first ?? "No property"
// console.log(v)

// 2. Accessing a Method
// person.learn?.()

// 3. when Propery Name not matching and using custom var
// const h = "name"
// const pers = {
//     name:
//     {
//         first: "adnan",
//         last: 'Jane'
//     },
//     age: 25,
//     po: 21,
//     learn() {
//         console.log("I am a student")
//     }
// };

// const vt = pers[h]?.first
// console.log(vt)



// Iterating over an Object
// 1. Using for in
// for (const key in person) {
//     console.log(key, person[key])
// }
// // 2. Using entries method with of
// const entries = Object.entries(person)
// for (const [key, value] of entries) {
//     console.log(key, value)
// }


// Pushung an Object into an array
//array will hold object as a whole, in one index
// const myArray = [];

// Creating an object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// Pushing the object into the array
// myArray.push(person);
// console.log(myArray)
// console.log(myArray.length)


// const students = [];

// students.push({ name: "Alice", grade: "A" });
// students.push({ name: "Bob", grade: "B" });
// students.push({ name: "Carol", grade: "A-" });


// console.log(students)



// Closure
// function myFunction() {
//     const greet = "Hello"
//     console.log("HI")
//     function greeting() {
//         console.log(greet)
//     }
//     return greeting
// }
// const call = myFunction
// const call2 = call()
// call2()
// function createCounter() {
//     let count = 0;
//     return function increment() {
//         count++;
//         console.log(count)
//     }
// }

// const ab = createCounter()
// ab()
// ab()

// const counter = createCounter();
// counter.increment();
// console.log(counter.getCount()); // Output: 1


// Reduce Method Examples
//1. Counting occurence of Elements
// const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// const wordCount = words.reduce(function (accumulator, currentValue) {
//     if (!accumulator[currentValue]) {
//         accumulator[currentValue] = 1;
//     } else {
//         accumulator[currentValue]++;
//     }
//     return accumulator;
// }, {});
// console.log(wordCount);
/* Output:
{
    apple: 3,
    banana: 2,
    cherry: 1
}
*/

// 2. Grouping Object By Property
// const data = [
//     { category: 'A', value: 10 },
//     { category: 'B', value: 20 },
//     { category: 'A', value: 30 },
//     { category: 'C', value: 40 }
// ];
// const grouped = data.reduce(function (accumulator, currentValue) {
//     const category = currentValue.category;
//     if (!accumulator[category]) {
//         accumulator[category] = [];
//     }
//     accumulator[category].push(currentValue);
//     return accumulator;
// }, {});
// console.log(grouped);
/* Output:
{
    A: [ { category: 'A', value: 10 }, { category: 'A', value: 30 } ],
    B: [ { category: 'B', value: 20 } ],
    C: [ { category: 'C', value: 40 } ]
}
*/


//Iterating over an array of Objects
// const datas = [
//     { category: 'A', value: 10 },
//     { category: 'B', value: 20 },
//     { category: 'A', value: 30 },
//     { category: 'C', value: 40 }
// ];

// 1. Using for of loop with Object.entries
// const ent = Object.entries(datas)
// for (const [key, value] of ent) {
//     console.log(key, value)
// }

// // 2. Using for in loop
// for (const key in datas) {
//     console.log(key, data[key])
// }

// 3. Using for each loop
// datas.forEach(function (ce, i, arr) {
//     console.log(`Iteration ${i + 1} : Current Element ${ce.category} : ${ce.value}`)
// })



//Iterating over a Map
// const mp = new Map(
//     [
//         ['a', 'Adnan'],
//         ['b', 'Safwan'],
//         ['c', 'Abdul']
//     ]
// );
// mp.set('d', 'Areeb')        //set
// console.log(mp.get('b'))    //get

// 1. using forEach
// mp.forEach(function (value, key, map) {
//     console.log(`Key : ${key}, Value : ${value}`)
// })

// 2. Using for of
// for (const [key, value] of mp) {
//     console.log(key, value)
// }


// const ar = [9, 8, 7, 6]
// for (const value of ar) {
//     console.log(value)
// }

//Prototype

// function Person(name, age, profession) {
//     this.name = name;
//     this.age = age;
//     this.profession = profession

// this.prof = function (profession) {
//     console.log("My Profession is :", this.profession)
// }
// }

//this method will be inherited by each object created using Person Constructor function, but this method/proprty wil not be the own property of those objects
// Person.prototype.profes = function () {
//     console.log("My Profession is :", this.profession)
// }

// const p1 = new Person('Adnan', 23, "Engineer")
// p1.profes()
// console.log(p1)

//Setters and Getters

// class Boy {
//     constructor(firstName, lastName, age) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._age = age;
//     }

//     set fullName(name) {
//         const [firstName, lastName] = name.split(" ");
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     get fullName() {
//         return `${this._firstName} ${this._lastName}`
//     }

//     // set birthyear(currentYear) {
//     //     this._birthYear
//     // }


// }

// const p1 = new Boy("Mohammad", "Adnan", 23);
// console.log(p1)
// p1.fullName = "Adnan Choudhary"
// console.log(p1)
// p1.fullName
















// class Person {
//     constructor(firstName, lastName, age) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._age = age;
//     }

//     static square(age) {
//         return age * age;
//     }

//     // Getter for the full name
//     get fullName() {
//         return `${this._firstName} ${this._lastName}`;
//     }

//     // Setter for the full name
//     set fullName(name) {
//         const [firstName, lastName] = name.split(" ");
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }
// }














// class MathUtility {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     static square(age) {
//         return age * age;
//     }
// }

// // Call the static method using the class name
// // console.log(MathUtility.square(5));

// const o1 = new MathUtility("Adnan", 6);
// console.log(o1)





//Inheritance b/w constructor functions
// function Persons
//     (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };


//setting a metod to Persons prototype
// Persons.prototype.calcAge = function (birthYear) {
//     return (2023 - this.birthYear);
// };

// function Student
//     (firstName, birthYear, course) {

// this.firstName = firstName;
// this.birthYear = birthYear;
//Sice we are using same code as in person class, we can avoid DRY and call Person function here, it'll do the same, but we have to explicitly set this kw
//     Persons.call(this, firstName, birthYear);
//     this.course = course;

// }


//Linking Both classes/constructor functions
// or
// linking prototypes
// Student.prototype = Object.create(Persons.prototype)
//now Student.proto obj is now an obj that inherits from Persons.proto

//adding a method to Students prototype
//we are adding it after linking both prototypes because object.create will return an empty object. hence at this point student.prottype is empty, and so that we can add methods to that empty object
// Student.prototype.introduce = function () {
//     return `My name is ${this.firstName} and my course is ${this.course}`;
// };

//creating a instance of Student
//it'll inherit  properties of not only Student proto but also Persons proto, since we have linked both prototypes
// const adnan = new Student("Adnan", 2001, "BTECH")
// console.log(adnan)
// console.log(adnan.calcAge())
// console.log(adnan.introduce())

// console.dir(Student.prototype.constructor)
// Student.prototype.constructor = Student
// console.dir(Student.prototype.constructor)



// Inheritance b/w classses
// class Persons {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge(birthYear) {
//         return (2023 - this.birthYear);
//     };

// };

// class Student extends Persons {
//     constructor(firstName, birthYear, course) {
// this.firstName = firstName;
// this.birthYear = birthYear;
//Sice we are using same code as in person class, we can avoid DRY and call super method
//         // Persons.call(this, firstName, birthYear);
//         super(firstName, birthYear)
//         this.course = course;

//     }

//     introduce() {
//         return `My name is ${this.firstName} and my course is ${this.course}`;
//     }
// }

// const p1 = new Student("Adnan", 2001, "BTCEH")
// console.log(p1)
// console.log(p1.calcAge())
// console.log(p1.introduce())

// Inheritence using Object.create
//Parent Object
// const VehicleProto = {

//     init(seats) {
//         this.seats = seats;
//     },

//     engine() {
//         console.log("Engine Started")
//     },

// };

//Child of Parent
// creating a new object named CarProto that inherits from the VehicleProto object.
// const CarProto = Object.create(VehicleProto)
//for each new method in carProto
// CarProto.init = function (seats, colour) {

//invoking init method of VehicleProto
//and setting this value to the current object
//     VehicleProto.init.call(this, seats);
//     this.colour = colour;
// };

// CarProto.type = function () {
//     console.log("This car is electric type")
// }

//Grand Child of Parent Object
// creating a new object named electricVehicle that inherits from the CarProto object.
// const electricVehicle = Object.create(CarProto)
// electricVehicle.init(4, "Red")
// electricVehicle.engine()
// electricVehicle.type()
// console.log(electricVehicle)


// //map method
// const arr = [1, 2, 3, 4, 5]
// const m = arr.map(function (arr) {
//     return arr *= 2;
// })
// console.log(m)

// const n = arr.map(arr => arr * 2)
// console.log(n)

// //filter method
// const f = arr.filter(function (arr) {
//     return (arr % 2) !== 0;
// })
// console.log(f)

// //reduce method
// const r = arr.reduce(function (accumulator, currentValue) {

//     return accumulator += currentValue;
// }, 0);
// console.log(r)



// function outer() {
//     let count = 0
//     console.log("oiuter", count)

//     return function inner() {

//         count++;
//         console.log("inner", count)

//     }
// }

// const a = outer()
// // const b = outer()
// a()
// a()
// a()


//coding assignment
// function convert(fullName) {
//     const [first, second] = fullName.toLowerCase().split("_");
//     const res = (second.replace(second[0], second[0].toUpperCase()))
//     return first + res;

// }

// console.log(convert("first_name"))


// console.log("msg1")
// setTimeout(function () { console.log("msg2") }, 0)
// console.log("msg3")
// setTimeout(function () {
//     console.log('Message no. 2: setTimeout');
// }, 0);
// console.log('Message no. 1: Sync');

// var promise = new Promise(function (resolve, reject) {
//     reject();
// });
// promise.then(function (resolve) {
//     console.log('Message no. 3: 1st Promise');
// })
//     .then(function (resolve) {
//         console.log('Message no. 4: 2nd Promise');
//     });
// console.log('Message no. 5: Sync');


//Promises
// function parseJson(response) {
//     return response.json();
// }

// function fetchData(country) {

//     return fetch(`https://restcountries.com/v3.1/name/${country}`)
// }

// function error(error) {
//     console.log("Error!")
// }

// fetchData("India")
//     .then(parseJson)
//     .then(data => {
//         console.log(data[0])
//         const [neighbour] = data[0].borders

//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(parseJson)
//     .then(data => {
//         console.log("Neighbour", data[0])
//         const [neighbour] = data[0].borders

//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(parseJson)
//     .then(data => {
//         console.log("Neighbour", data[0])
//     })
//     .catch(error => console.error(error))
//     .finally(() => console.log("Final"))

// const geo = async function (country) {

//     try {
//         const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//         if (!response.ok) throw new Error("Problem getting country!!")

//         const data = await response.json();
//         console.log(data?.[0])
//         // console.log(data[0])

//         const [neighbour] = data[0]?.borders
//         // console.log(neighbour)//AFG

//         const response2 = await fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//         const data2 = await response2.json();
//         console.log(data2[0])

//         return `You're in ${data.country} Country and ${data.capital}`
//     } catch (err) {
//         console.log("Error!! : ", err)
//     }

// }
// geo("china")
// (async function () {

//     try {
//         const cnt = await geo("china");
//         console.log(cnt)

//     } catch (err) {
//         console.error(err.message)
//     }
// })();



// //Custom Promises
// const promise = new Promise(function rand(resolve, reject) {

//     console.log("Executing");

//     setTimeout(function () {
//         const num = 100
//         num > 10 ? resolve(num) : reject(new Error("Number too small"));
//     }, 2000);

// });

// promise.then((resolved) => { console.log("Resolved  :", resolved) }, (reject) => { console.log("Rejected  :", reject) });


// const goeLoc = new Promise(function (resolve, reject) {
//     return navigator.geolocation.getCurrentPosition(resolve, reject);
// })

// goeLoc.then(pos => console.log(pos))

// const whereAmI = async function (country) {

//     const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)

//     const data = await response.json();
//     console.log(data[0])

// }

// whereAmI("russia")

// async function fetchData() {
//     try {
//         console.log('Fetching data...');
//         const response = await fetch('https://api.example.com/data');
//         const data = await response.json();
//         console.log('Data fetched:', data);

//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// console.log('Before fetchData');
// fetchData();
// console.log('After fetchData');
// const promise = new Promise(function rand()
// const ab = new Promise(function aysnc(resolve, reject) {

//     const num = 10;
//     console.log("Sync code 1")
//     return setTimeout(function () {
//         console.log("Async Code")
//         num > 1 ? resolve(num) : reject(new Error("Rejected"));
//     }, 100)


// })

// ab.then((resolve) => { console.log("Resolved  :", resolve) }, (reject) => { console.log("Rejected  :", reject) });
// console.log("Sync code 2")



// const arrayOfObjects = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 28 }
// ];

// for (const key of arrayOfObjects) {
//     console.log(key.name, key.age)
// }

// arrayOfObjects.forEach(function (value, index, arr) {
//     console.log(value.name)
// })

// const person = {
//     name: 'Alice',
//     age: 30,
//     address: {
//         city: 'New York',
//         zip: '10001'
//     },
//     hobbies: ['reading', 'painting']
// };

// const { name, ...rest } = person
// console.log(name)
// for (const key in person) {
//     // console.log(key, person[key])
//     console.log(person.address.city)
// }
// for (const key in person) {
//     if (typeof person[key] === 'object') {
//         for (const nestedKey in person[key]) {
//             console.log(`${nestedKey}: ${person[key][nestedKey]}`);
//         }
//     } else {
//         console.log(`${key}: ${person[key]}`);
//     }
// }
// for (const key in person) {
//     if (typeof person[key] === "object") {
//         for (const nestedkey in person[key]) {
//             console.log(nestedkey, ":", person[key][nestedkey])
//         }

//     } else {
//         console.log(key, ":", person[key])
//     }

// }


// const arr = [1, 2, 3, 4, 5]
// console.log(arr.filter(a => a % 2 !== 0))


// const arr = [1,2,3,4,5]
// const [a, ,b] = arr;


// const obj = {
//     name : "abc",
//     age : 23,
//     profession : "engineer"
// }


// const {name : n, age : a}= obj;


//Question
// create one addition function
// create one multiplication function
// use multiplication function as callback function and result of addition function must be passed onto callback function


//Example of a callback function
// function add(a, b, callBack) {
//     const c = a + b;
//     return callBack(c, a)
// }

// function multiply(a, b) {
//     return a * b;
// }

// console.log(add(2, 3, multiply))


//conversion of above example into a promise
// function add(a, b, callBack) {

//     return new Promise(function (resolved, reject) {
//         console.log("In Add")
//         const c = a + b;
//         resolved(callBack(c, b))

//         //another way
//         // const d = callBack(c, b)
//         // resolved(d)
//     })
// }

// function multiply(a, b) {

//     return new Promise(function (resolved, reject) {
//         resolved(a * b)
//     })
// }

// add(2, 3, multiply).then(value => console.log(value))




// console.log("Start")
// const pr = new Promise(function (resolve, reject) {
//     resolve("String")
// })

// pr.then(str => console.log(str))
// console.log("Middle")

// setTimeout(function () {
//     console.log("Set Timeout")
// }, 2000)

// console.log("End")

//Output :
// start
// middle
// end
// promise
// Set Timeout


// function sayGoodBye() {
//     console.log("Goodbye")
// }

// //higher order func
// function greet(name, callBack) {
//     console.log(`Hello, ${name}`);
//     callBack();
// }

// greet("X", sayGoodBye);


// function greet(name) {

//     return new Promise((resolve, reject) => {
//         resolve(name);

//     });

// }



// function sayGoodBye(name) {
//     return new Promise((resolve, reject) => {
//         // console.log("Goodbye", name)
//         resolve(name)
//     });
// }

// greet("X").then(name => console.log("Hello", name))
//     .then(sayGoodBye("X").then(name => console.log("Goodbye", name)))


// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     alert(`Cool, the script ${script.src} is loaded`);
//     alert(_); // _ is a function declared in the loaded script
// });

//Hoisting


// nf()    //running
// // infc()
// // console.log(jhgj)
// console.log(vf)

// vf()    //vaf is not a function
// vaf()   //vaf is not a function
// console.log(v)  //undefined

// cf()     //Cannot access 'cf' before initialization
// lf()    //Cannot access 'lf' before initialization
// caf()    //Cannot access 'caf' before initialization
// laf()    //Cannot access 'laf' before initialization
// console.log(c)  Cannot access 'c' before initialization
// console.log(l)  Cannot access 'l' before initialization

// var v = 10;
// const c = 11;
// let l = 12;

// var vf = function () {
//     console.log("In Vf")
// }
// const cf = function () {
//     console.log("In cf")
// }
// let lf = function () {
//     console.log("In lf")
// }

// var vaf = () => {
//     console.log("In Vaf")
// }
// const caf = () => {
//     console.log("In caf")
// }
// let laf = () => {
//     console.log("In laf")
// }
// console.log(laf())


// function nf() {
//     console.log("In outer nf")
//     // jhgj = 10;
//     // console.log("In outer nf", jhgj)
//     // return () => {
//     //     const inf = 22;
//     //     console.log("In Inner nf", inf)
//     //     console.log("inner", jhgj)
//     // }
// }

//Conclusion = Only a normal function declaration can ne accessed before its declaration, due to hoisting
//Others can't be accessed

// console.log(vars)
// function fun() {
//     // console.log(name);


//     let name = 'Mukul Latiyan';
//     console.log(name);
//     // var vars;

//     var vars = "Hello"
//     // console.log(vars)//

// }
// fun();

// console.log(vars)

//Custom Prmise with catch
// function add(a, b) {
//     const c = a + b;
//     return new Promise((resolve, reject) => {
//         c > 10 ? resolve(c) : reject("Not Resolved");
//         // resolve(c);
//     })
// }

// add(3, 1).then((result) => { console.log(result) }).catch(err => console.error("Error", err))


// Custom Promise
// function add(a, b, callBack) {
//     return new Promise((resolve, reject) => {
//         const c = a + b;
//         resolve(callBack(c, b))
//     })
// }

// function multiply(a, b) {
//     return new Promise((resolve, reject) => {
//         const d = a * b;
//         resolve(d);
//     })
// }

// async function add(a, b, callBack) {

//     const c = a + b;
//     return await (callBack(c, b))

// }

// function multiply(a, b) {

//     const d = a * b;
//     return d;

// }

// add(2, 3, multiply).then(value => console.log(value))

// add(2, 3, multiply).then(result => console.log(result))

// //custom promise
// let p = new Promise(function (resolve, reject) {
//     resolve("Resolved")
// })
// p.then(result => console.log(result))

// function add(a, b) {
//     return new Promise((resolve, reject) => {
//         const d = a + b;
//         resolve(d);
//     })
// }
// function multiply(a, b) {
//     return new Promise((resolve, reject) => {
//         const d = a * b;
//         resolve(d);
//     })
// }
// function subtract(a, b) {
//     return new Promise((resolve, reject) => {
//         const d = a - b;
//         resolve(d);
//     })
// }
// function diivde(a, b) {
//     return new Promise((resolve, reject) => {
//         const d = a / b;
//         resolve(d);
//     })
// }

// add(6, 2).then((data) => {
//     console.log(data);
//     return multiply(6, 2);
// }).then((data) => {
//     console.log(data);
//     return subtract(6, 2);
// }).then((data) => {
//     console.log(data);
//     return diivde(6, 2);
// }).then((data) => {
//     console.log(data);
// })





// async function multiply(a, b) {
//     const d = await a * b;
//     console.log(d)

// }

// async function subtract(a, b) {
//     const d = await a - b;
//     console.log(d);
// }





//Promise All
// Promise.all([add(6, 2), multiply(6, 2), subtract(6, 2), diivde(6, 2)]).then(data => console.log(data.map(d => console.log(d))))


// add(4, 2).then(v => multiply(4, 2)).then(v1 => subtract(4, 2)).then(v2 => diivde(4, 2)).then(v3 => { console.log(v3) });
// loadScript("/article/promise-chaining/one.js")
//     .then(script => loadScript("/article/promise-chaining/two.js"))
//     .then(script => loadScript("/article/promise-chaining/three.js"))
//     .then(script => {
//         one();
//         two();
//         three();
//     });



// add(4, 2).then(v1 => {
//     multiply(4, 2).then(v2 => {
//         subtract(4, 2).then(v3 => {
//             diivde(4, 2).then(v4 => {// this function has access to variables v1, v2 and v3, v4
//                 console.log(v1, v2, v3, v4)
//             });
//         });
//     });
// });



// add(4, 2).then(v1 => {
//     multiply(4, 2).then(v2 => {
//         subtract(4, 2).then(v3 => {
//             diivde(4, 2).then(v4 => {
//                 console.log(v1, v2, v3, v4)
//             });
//         });
//     });
// });

// add(4, 2)
//     .then(v1 => multiply(4, 2))
//     .then(v2 => subtract(4, 2))
//     .then(v3 => diivde(4, 2))
//     .then(v4 => console.log(v1, v2, v3, v4));


// function addi(a, b) {
//     return new Promise(function (resolved, rejected) {
//         const c = a + b;
//         resolved(c)
//     })
// }

// function square(value) {
//     return new Promise(function (resolved, rejected) {
//         const c = value * value;
//         resolved(`Value : ${c}`)
//     })
// }

// add(5, 5).then(value => {
//     console.log(`Addition : ${value}`);
//     return square(value);
// }).then(result => console.log(result));


//????????? why error is not caught
// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         throw new Error("Whoops!");
//     }, 1000);
// }).catch(alert);





//async await

// async function add(a, b) {
//     return new Promise((resolve, reject) => resolve(a + b));
//     // console.log(d)
// }

// console.log(3)
// // add(2, 3).then(v => console.log(v))
// async function displays() {
//     let data = await add(2, 2);
//     console.log(data);
// }
// displays()
// console.log(7)


// async function asynchronous_operational_method() {

//     return new Promise((resolve, reject) => resolve("Hello"));
//     // let second_promise =
//     //     new Promise((resolve, reject) => {
//     //     setTimeout(() => {
//     //         resolve(" GeeksforGeeks..");
//     //     }, 1000);
//     // });
//     // let combined_promise =
//     //     Promise.all([first_promise, second_promise]);
//     // return combined_promise;
// }

// async function display() {
//     let data = await asynchronous_operational_method();
//     console.log(data);
// }

// display();



