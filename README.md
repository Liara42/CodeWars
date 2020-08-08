# CodeWars
Solved Problems From CodeWars

-Persistent Bugger-
Task:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
Examples:
  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4, and 4 has only one digit
  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
  persistence(4) === 0 // because 4 is already a one-digit number

-Simple Pig Latin-
Task:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples:
  pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
  pigIt('Hello world !');     // elloHay orldway !

-Valid Parentheses-
Task:
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples:
  "()"              =>  true
  ")(()))"          =>  false
  "("               =>  false
  "(())((()())())"  =>  true

-Vasya-Clerk-
Task:
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
