// var arr=["Chiru","vamsi","vineeth","vikas"]
// str="chirudeep"
// 1.Write a code snippet to find the length of an array.
// console.log(arr.length)
// 2.How do you add an element to the end of an array?
// arr.push("VG")
// console.log(arr)
// 3.How do you remove the last element from an array?
// arr.pop()
// console.log(arr)
// 4.How do you add an element to the beginning of an array?
// arr.unshift("Aditya")
// console.log(arr)
// 5.How can you remove the first element from an array?
// arr.shift()
// console.log(arr)
// 6.How do you reverse the elements in an array?
// console.log(arr.reverse())
// 7.How can you find the index of a specific value in an array?
// console.log(arr.indexOf("Chiru"))
// 8.How can you check if a certain value exists in an array?
// console.log(arr.includes("vikas"))
// 9.How can you sort the elements of an array in ascending order?
// console.log(arr.sort())
//10. How can you convert an array to a string using commas as separators?
// console.log(arr.toString())
// console.log(arr.join(","))
// 11.A string to array using commas as seperators
// console.log(str.split(""))


// Questions with Multiple Array Methods:

// 1.Write a code snippet that adds an element to the end of an array, then removes the first element.
// arr.push("VG")
// arr.shift()
// console.log(arr)

// 2.How can you reverse an array and then join the elements into a string?
// console.log(arr.reverse().join(","))

// 3.Write a code that first sorts an array in ascending order, then removes the last element.
// arr.sort()
// arr.pop()
// console.log(arr)

// 4.How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
// arr.unshift("Sandeep","Santhosh")
// arr.shift()
// arr.reverse()
// console.log(arr)

// 5.How do you combine two arrays, sort the combined array, and then remove the last element?
// var arr1=["apple","banana","orange","orchid"]
// var arr2=["tomato","brinjal","potato","lemon"]
// var arr3=arr1.concat(arr2)
// console.log(arr3)
// arr3.sort()
// arr3.pop()
// console.log(arr3)


// Question 1: Manage a Guest List
// You are managing a guest list for an event.
// Start with an array: ["Alice", "Bob", "Charlie", "David"].
// Add a new guest at the beginning of the list.
// Remove the last guest from the list.
// Check if "Bob" is still in the list after modifications.
// What does the final list look like?
// var GuestList=["Alice", "Bob", "Charlie", "David"]
// GuestList.unshift("Messi")
// GuestList.pop()
// console.log(GuestList.includes("Bob"))
// console.log(GuestList)

// Question 2: Generate a Sentence
// Given a string: "Learn,Practice,Improve",
// Convert the string into an array of words.
// Reverse the order of the words.
// Join the reversed array into a single string with spaces between words.
// What is the final output?
// var str="Learn,Practice,Improve"
// var arr=str.split(",")
// console.log(arr)
// arr.reverse()
// console.log(arr.join())

// Question 3: Create a Playlist
// You have two arrays of songs:
// ["Song1", "Song2", "Song3"] and ["Song4", "Song5"].
// Combine these two arrays into one playlist.
// Remove the first song from the playlist.
// Add a new song, "Song6", to the end of the playlist.
// What does the final playlist look like?
// var Songs1=["Song1", "Song2", "Song3"];
// var Songs2=["Song4", "Song5"];
// var Playlist=Songs1.concat(Songs2)
// Playlist.shift()
// Playlist.push("Song6")
// console.log(Playlist)

// Question 4: Extract Favorite Movies
// You have a list of movies:
// ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"].
// Extract the middle three movies into a new array.
// Combine this new array with another array: ["The Matrix", "The Godfather"].
// Reverse the order of the combined list.
// What is the final list?
// var Movies1=["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];
// var Favmovies=Movies1.slice(1,4)
// var Movies2=["The Matrix", "The Godfather"]
// var arr=Favmovies.concat(Movies2)
// console.log(arr.reverse())

// Question 5: String Operations on Names
// Given a string: "John,Doe,Jane,Smith",
// Split the string into an array.
// Check if the array includes "Jane".
// Reverse the array and join the names with a space.
// What is the final output?
// var str="John,Doe,Jane,Smith";
// var arr=str.split(",")
// console.log(arr.includes("Jane"))
// arr.reverse()
// console.log(arr.join(" "))

// Question 6: Length-Based Manipulation
// You have an array of numbers: [1, 2, 3, 4, 5].
// Remove the first element from the array.
// Add the numbers 6 and 7 to the end.
// Calculate the final length of the array.
// What are the final array and its length?
// var num=[1, 2, 3, 4, 5];
// num.shift()
// num.push(6,7)
// console.log(num.length)
// console.log(num)

// Question 7: Shopping Cart Operations
// You have a shopping cart array:
// ["Milk", "Bread", "Eggs", "Butter"].
// Check if "Eggs" are in the cart.
// Remove "Butter" from the cart.
// Add "Cheese" and "Juice" to the end of the cart.
// What does the final shopping cart look like?
// var Cart=["Milk", "Bread", "Eggs", "Butter"];
// console.log(Cart.includes("Eggs"))
// Cart.pop()
// Cart.push("Cheese","Juice")
// console.log(Cart)

// Question 8: Rearrange and Combine Names
// You have two arrays of names:
// ["Alice", "Bob", "Charlie"] and ["David", "Eve"].
// Reverse the first array.
// Combine the reversed array with the second array.
// Add "Frank" to the beginning of the combined list.
// What is the final list?
// Names1=["Alice", "Bob", "Charlie"];
// Names2=["David", "Eve"];
// Names1.reverse();
// Names=Names1.concat(Names2);
// Names.unshift("Frank");
// console.log(Names)

// Question 11: Shopping Cart Operations
// You have a shopping cart:
// ["Milk", "Bread", "Eggs", "Butter"].
// Find the index of "Eggs" in the cart.
// Remove "Eggs" and replace it with "Cheese"
// Add "Juice" to the beginning of the cart.
// What does the final shopping cart look like?
// var Cart=["Milk", "Bread", "Eggs", "Butter"]
// console.log(Cart.indexOf("Eggs"));
// Cart[2]="Cheese";
// Cart.unshift("Juice")
// console.log(Cart)