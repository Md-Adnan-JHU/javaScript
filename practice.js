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





// let me = {
//     name: "Adnan",
//     age: 23

// };

// //set
// me["is Male"] = true;
// //get
// console.log(me["is Male"])
// //delete
// delete me["is Male"]