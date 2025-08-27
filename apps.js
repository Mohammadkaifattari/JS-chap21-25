// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.
//  Greet the user using his full name.


// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Welcome!"); //for greeting User

// 2. Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser


// let mobileModel = prompt("Enter your favorite mobile phone model:");
//     let modelLength = mobileModel.length;

//     document.write("Your favorite mobile phone model is: <strong>" + mobileModel + "</strong><br>");
//     document.write("Length of input: <strong>" + modelLength + "</strong> characters");

// 3. Write a program to find the 
// index of letter “n” in the word “Pakistani” and display the result in your browser .

// var name = "Pakistani"
// var indes = name.indexOf("n") //indexOf using for finding an sring  index 
// document.write(`${name}`)
// document.write(`The index of  n  in the word of ${name} is ${indes} `)

// 4. Write a program to find
//  the last index of letter “l” in the word “Hello World” and display the result in your browser

// var name = "hello world"
// var indes = name.lastIndexOf("l") //indexOf using for finding an sring  index 
// document.write(`${name}`)
// document.write(`The index of  n  in the word of ${name} is ${indes} `)

// 5. Write a program to find the character at 3rd index in the word
//  “Pakistani” and display the result in your browser.


// var name = "Pakistani"
// var indes = name[3] //indexOf using for finding an sring  index 
// document.write(`${name}`)
// document.write(`The third index of word pakistani is ${indes} `)

// 6. Repeat Q1 using string concat() method.

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(" ", lastName);
// alert(fullName)

// 7. Write a program to replace 
// the “Hyder” to “Islam” in the word “Hyderabad” and display the 
// result in your browser.

// let cityname="Hyderabad"
// let newCity=cityname.replace("Hyder", "Islam")
// document.write("Updated: " + newCity)

// 8. Write a program to replace all 
// occurrences of “and” in the string with “&” and display the resul
// t in your browser. var message = “Ali and Sami are best friends. 
// They play cricket and football together.”;

// // var message = "Ali and Sami are best friends. They play cricket and football together"

// var changed_message =message.replace("and","&")

// document.write("Before: " + message+"<br>")
// document.write("Updated: " + changed_message)


// 9. Write a program that converts a 
// string “472” to a number 472. Display the values & types in your browser.

// var string="472"
// var num = Number(string)  Number()  for to number
// console.log(num);
// console.log(string);
// var num2 =236428374
// console.log(num2);

// 10. Write a program that takes user input.
//  Convert and show the input in capital letters.


// var input=prompt("Give us For")
// var upper=input.toUpperCase()

// document.write(`user input ${input} <br>`)
// document.write(`uppercase ${upper} `)

// 11. Write a program that takes user input.
//  Convert and show the input in title case.

// var input=prompt("Give us For")
// var upper=input.()

// document.write(`user input ${input} <br>`)
// document.write(`uppercase ${upper} `)



// 12. Write a program that converts the variable num to string. 
// var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// var num = 78.6
// var stg = num.toString()
// console.log(stg);

// document.write(`user input ${stg} <br>`)


// 13. Write a program to take user input and store username in a variable.
//  If the username contains any special symbol among [@ . , !],
//  prompt the user to enter a valid username. For character codes of [@ .

// var input=prompt("Enter Your Name")
// if (input ===33 ||input ===44||input ===46||input ===64) {
//     input=prompt("Please Enter The Valid User Name")
    
// }else{alert("Logined")}

// 14. You have an array 
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//  Write a program to enable “search by user input” in an array. 
//  After searching, prompt the user whether the given item is found in the list or not.
//   Note: Perform case insensitive search. 
//   Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
//    Example:

var  A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search=prompt("search Your Favorite Dish").toLocaleUpperCase()

var flags=false
for (let i = 0; i < A.length; i++) {
if (A[i]===search) 
    {alert(`Yes ${A[i]}
     is Avalabile in index ${i}`)
     var flags=true
     break

    
}    
    
}
if (!flags) {   alert(`We are sorry, "${search}" is not available in our bakery.`);
    
}

