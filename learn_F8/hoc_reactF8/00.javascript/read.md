1. Variables
   We use var, let and const to declare a variable.
   The var is functions scope, however let and const are block scope.
   In this challenge we use ES6 and above features of JavaScript. Avoid using var.

   let firstName = 'Asabeneh'
   firstName = 'Eyob'

   const PI = 3.14 // Not allowed to reassign PI to a new value
   // PI = 3.

2. Data Type

3. Array
   In contrast to variables, an array can store multiple values.
   Each value in an array has an index, and each index has a reference in a memory address.
   Each value can be accessed by using their indexes.
   The index of an array starts from zero, and the index of the last element
   is less by one from the length of the array.

   An array is a collection of different data types which are ordered and changeable(modifiable).
   An array allows storing duplicate elements and different data types.
   An array can be empty, or it may have different data type values.

   How to create an empty array
   In JavaScript, we can create an array in different ways.
   Let us see different ways to create an array.
   It is very common to use const instead of let to declare an array variable.
   If you are using const it means you do not use that variable name again.

   Case 1: Using Array constructor
   // syntax
   const arr = Array()
   // or
   // let arr = new Array()
   console.log(arr) // []

   Case 2: Using square brackets
   // syntax
   // This the most recommended way to create an empty list
   const arr = []
   console.log(arr)

   Case 1: Create an array with values
   const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
   const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
   const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
   const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
   const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
   const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

   // Print the array and its length

   console.log('Numbers:', numbers)
   console.log('Number of numbers:', numbers.length)

   console.log('Fruits:', fruits)
   console.log('Number of fruits:', fruits.length)

   console.log('Vegetables:', vegetables)
   console.log('Number of vegetables:', vegetables.length)

   console.log('Animal products:', animalProducts)
   console.log('Number of animal products:', animalProducts.length)

   console.log('Web technologies:', webTechs)
   console.log('Number of web technologies:', webTechs.length)

   console.log('Countries:', countries)
   console.log('Number of countries:', countries.length)

   - Output:
     Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
     Number of numbers: 6
     Fruits: ['banana', 'orange', 'mango', 'lemon']
     Number of fruits: 4
     Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
     Number of vegetables: 5
     Animal products: ['milk', 'meat', 'butter', 'yoghurt']
     Number of animal products: 4
     Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
     Number of web technologies: 7
     Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
     Number of countries: 5

   Case 2: Creating an array using split
   let js = 'JavaScript'
   const charsInJavaScript = js.split('')

   console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

   let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
   const companies = companiesString.split(',')

   console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
   let txt =
   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
   const words = txt.split(' ')

   console.log(words)
   // the text has special characters think how you can just get only the words
   // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

   Case 3: Accessing array items using index
   We access each element in an array using their index.
   An array index starts from 0.

   const fruits = ['banana', 'orange', 'mango', 'lemon']
   let firstFruit = fruits[0] // we are accessing the first item using its index

   console.log(firstFruit) // banana

   secondFruit = fruits[1]
   console.log(secondFruit) // orange

   let lastFruit = fruits[3]
   console.log(lastFruit) // lemon
   // Last index can be calculated as follows

   let lastIndex = fruits.length - 1
   lastFruit = fruits[lastIndex]

   console.log(lastFruit) // lemon

   Methods to manipulate array
   There are different methods to manipulate an array.
   These are some of the available methods to deal with arrays:
   Array, length, concat, indexOf, slice, splice, join, toString,
   includes, lastIndexOf, isArray, fill, push, pop, shift, unshift
