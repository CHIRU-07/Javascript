// 1.Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.
// var obj=new Object();
// obj.firstName="Chiru";
// obj.lastName="deep";
// obj.age=21;
// console.log(obj.firstName)
// obj.city="Newyork";
// console.log(obj)

// 2.Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.
// var product={
//     name:"TV",
//     price:"100000 rs",
//     inStock:"Yes"
// }
// product.price="120000 rs"
// delete product.inStock;
// console.log(product)

// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.
// var Library={
//     Humor:["Bossypants ","Good Omens"],
//     Philosophy:["The Alchemist","Meditations"],
//     Fantasy:["Dune by","The Hobbit"],
//     Mystery:["Gone Girl","The Girl with the Dragon Tattoo"]
// }
// Library.sciencefiction=["o Kill a Mockingbird","The Great Gatsby"]
// console.log(Library.Fantasy[0]);
// delete Library.Mystery;
// console.log(Library)

// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.
// var obj={
//     username:"Chirudeep",
//     email:"chiru@gmail.com",
//     adress:{
//         city:"Hyd",
//         state:"telangana",
//         zip:53001
//     }
// }
// Object.freeze(obj);
// console.log(Object.isFrozen(obj))
// obj.phnnum=23345667;
// console.log(obj)

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()
// var car={
//     make:"Merecedes",
//     model:"G-wagon",
//     price:"2.3cr"
// }
// Object.seal(car)
// delete car.make
// console.log(Object.isSealed(car))
// car.price="2.5cr"
// console.log(Object.isExtensible(car))