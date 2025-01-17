//  1. Basic Discount Application
// let discount=20;
// let price=100;
// let discountedprice=(price)*(discount/100)
// let lastprice = price-discountedprice
// console.log("The price after " +discount+"% discount  is " +lastprice) 


//  2. Product Stock Availability
// let productavailability=10;
// let orderedstock=9;
// if(orderedstock <= productavailability){
//     console.log("The order is in stock")
// }
// else{
//     console.log("The order is out of stock")
// }


// 3.  Calculate Total Cost with Taxes
// let cost=450;
// let tax=0.12;
// let totalcost=cost + (cost * tax)
// console.log("The total cost of the product is "+totalcost)


// 4. Nested Conditions: Score Grading
// var marks=prompt("Enter your marks");
// if( marks >= 90 &&  marks < 100){
//     console.log("Grade : Outstanding")
// }
// else if( marks<90 && marks>=79){
//     console.log("Grade : A")
// }
// else if( marks<79 && marks>=60){
//     console.log("Grade : B")
// }
// else if( marks<59 && marks>=45){
//     console.log("Grade : C")
// }
// else{
//     console.log("Grade : F")
// }


//5. Ternary Operator: Adult Check

// let age=prompt("Enter your age")
// age>=18 ? console.log("You are peddodu") : console.log("You are pillodu")


//6. Logical AND Condition
// let hasID=false;
// let ticket=true;
// if( hasID==true && ticket==true){
//     console.log("You are allowed")
// }
// else{
//     console.log("You are not allowed")
// }


//7.  Calculate BMI
// let weight=prompt("Enter your weight (in Kgs)")
// let height=prompt("Enter your height (in metres)")
// let bmi= weight/(height * height)
// console.log("The bmi of you is "+bmi.toFixed(1))

// if(bmi<18.5 && bmi>0){
//     console.log("You are UnderWeight")
// }
// else if (bmi>=18.5 && bmi < 25) {
//     console.log("Healthy Weight")
// }
// else if (bmi>=25 && bmi < 30) {
//     console.log("You are Overweight")
// }
// else if(bmi>=30){
//     console.log("You are Obese")
// }


//8. Restaurant Service Charge
// let bill=500;
// let servicecharge=0;
// if(bill<=250){
//     servicecharge=bill*0.05
// }
// else if(bill>250 && bill<1000){
//     servicecharge=bill*0.1
// }
// else if (bill>=1000){
//     servicecharge=bill*0.45
    
// }
// console.log("The service charge for your bill is "+servicecharge)    



// 9.  Logical OR Condition: Password Check
// let passlength=12
// if(passlength> 8 || passlength<15){
//     console.log("Password length is not acceptable")
// }
// else{
//     console.log("Password length is acceptable")

// }


//10.  Leap Year Check
// let year=prompt("Enter the year")
// let yr=year.slice(-2)
// // console.log(yr)
// if(Number(yr)%4==0){
//     console.log(year+" is a leap year")
// }
// else{
//     console.log(year+" is not a leap year")

// }


//11.Check Driving and Drinking Age
// let age=prompt("Enter your age")
// if(age>=18){
//     if(age>=21){
//         console.log("Eligible for both driving and drinking")
//     }
//     else{
//         console.log("Only eligible for driving")
//     }
// }
// else{
//     console.log("You are a kid and not eligible for both driving and drinking")
// }
// if(age>=18 && age>=21){
//     console.log("Eligible for both driving and drinking")
// }
// else if(age>=18){
//         console.log("Only eligible for driving")
// }
// else{
//         console.log("You are a kid and not eligible for both driving and drinking")
//     }







// 1. Uber Fare Calculation
// How would you check the fare for an Uber ride based on the distance?
//  If the distance is less than 5 kilometers, 
//  the fare is the base fare plus 10 dollars per kilometer.
//   If the distance is between 5 and 15 kilometers, the fare is the base fare plus 8 dollars per kilometer. What would you write?
// let distance=prompt("Enter the distance to travel (in kilometres)")
// let fare=0
// if(distance<=5){
//    fare=distance*5
// }
// else if (distance >5 && distance<=15){
//     fare=distance*8
// }
// else{
//     fare=distance*10
// }
// console.log("The fare for your distance is "+fare +"$")


// 2. Chat Application: Offensive Words
// If you have a message, how would you check 
// if it contains any bad words like "bad" or "offensive"? If it does, 
// you should say "This message is not allowed." If it doesn’t, say "This message is okay." What code would you use?
// let message=prompt("Enter your message")
// if(message.includes("bad") ||message.includes("offensive")){
//     console.log("This message is not allowed.")
// }
// else{
//     console.log("This message is Okay.")
// }


//3.  E-Commerce Discounts
// You have a shopping cart total. If it is less than 100 dollars, there is no discount.
//  If it is between 100 and 300 dollars, you give a 10% discount. If it is more than 300 dollars,
//   you give a 15% discount. How would you write this?
// let shoppingcarttotal=prompt("Enter your total cart amount(in Dollars)")
// let lastprice;
// let discountedprice;
// discount1=0.10;
// discount2=0.15;
// if(shoppingcarttotal >=100 && shoppingcarttotal<=300){
//     discountedprice=shoppingcarttotal*discount1
//     lastprice=shoppingcarttotal-discountedprice
// }
// else if(shoppingcarttotal>300){
//     discountedprice=shoppingcarttotal*discount2
//     lastprice=shoppingcarttotal-discountedprice
// }
// console.log("Your final price after the discount is "+lastprice.toFixed(2))


// 4. Movie Ticket Prices
// How would you decide the price of a movie ticket based on the seat type? 
// If the seat is "Regular," it costs 10 dollars. If it's "Premium," it costs 15 dollars. 
// If it's "VIP," it costs 20 dollars. What would your code look like?
// let seattype=prompt("Enter your seat type (Regular / Premium / VIP)")
// seattype.toLowerCase()
// regular="10$"
// premium="15$"
// vip="20$"
// if(seattype=="regular"){
//     console.log("Your ticket for the "+seattype+" seat is "+regular)
// }
// else if(seattype=="premium"){
//     console.log("Your ticket for the "+seattype+" seat is "+premium)
// }
// else if(seattype=="vip"){
//     console.log("Your ticket for the "+seattype+" seat is "+vip)
// }/


// 5. User Online Status
// How can you check if a user is online? If they were active in the last minute, 
// say they are "online." If they were active in the last 1 to 5 minutes, say they are "away."
//  If they haven't been active for more than 5 minutes, say they are "offline." What code would you write?
let lastseen=prompt("Enter the last seen of user (In Minutes)")
if(lastseen<1){
    console.log("The User is Online")
}
else if(lastseen>=1 && lastseen<=5){
    console.log("The User is Away")
}
else if(lastseen>5){
    console.log("The User is Offline")
}

//6.  Uber Fare Based on Distance
// You want to calculate an Uber fare based on distance. If the distance is less than 5 kilometers, charge 10 dollars for each kilometer. 
// If it's between 5 and 15 kilometers, charge 8 dollars for each kilometer. If it’s more than 15 kilometers, 
// charge 7 dollars for each kilometer. How would you do this?

// 7. Free Shipping Check
// If a customer’s cart total is 100 dollars or more, they get free shipping. 
// If it’s less than 100 dollars, they do not. How would you write this in code?


// 8. Ticket Discount for Group Booking
// If a customer buys 3 or 4 tickets, they get a 5% discount. If they buy 5 or more tickets, they get a 10% discount. 
// If they buy fewer than 3 tickets, there’s no discount. What code would you write to check this?


// 9. Message Length Check
// You want to check if a message is too long. If it is longer than 50 characters, say "Please make your message shorter."
//  If it is 50 characters or less, say "Message sent." What would you write?

// 10. Payment Options Based on Cart Total
// If the customer’s cart total is less than 100 dollars, they can only pay by credit card. If it’s between 100 and 500 dollars,
//  they can pay by credit card or PayPal. If it’s over 500 dollars, they can pay by credit card, PayPal, or in installments. 
//  How would you write this in code?
