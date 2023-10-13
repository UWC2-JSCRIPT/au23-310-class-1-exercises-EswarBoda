/**
 * MATH
 */
const SMALL_PIZZA_DIAMETER = 13
const SMALL_PIZZA_PRICE = 16.99

const LARGE_PIZZA_DIAMETER = 17
const LARGE_PIZZA_PRICE = 19.99

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER / 2) ** 2);
console.log('Small pizza area is: ', smallPizzaArea);

const largePizzaArea = Math.PI * ((LARGE_PIZZA_DIAMETER / 2) ** 2);
console.log('Large Pizza Area is: ', largePizzaArea);

// 2. What is the cost per square inch of each pizza?
const smallPizzaCostPerSquareInch = SMALL_PIZZA_PRICE / smallPizzaArea;
console.log('Small pizza cost per square inch is: ', smallPizzaCostPerSquareInch);

const largePizzaCostPerSquareInch = LARGE_PIZZA_PRICE / largePizzaArea;
console.log('Large pizza cost per square inch is: ', largePizzaCostPerSquareInch);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
const LOWEST_CARD = 1
const HIGHEST_CARD = 13

// 4. Draw 3 cards and use Math to determine the highest
// card
const card1 = Math.ceil(Math.random() * HIGHEST_CARD)
console.log('Card 1 is: ', card1)
const card2 = Math.ceil(Math.random() * HIGHEST_CARD)
console.log('Card 2 is: ', card2)
const card3 = Math.ceil(Math.random() * HIGHEST_CARD)
console.log('Card 3 is: ', card3)

const highestCard = Math.max(card1, card2, card3)
console.log('Highest card is: ', highestCard)

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstName = 'Kotesh'
let lastName = 'Boda'
let streetAddress = '1234 Main Ave'
let city = 'Bellevue'
let state = 'WA'
let zipCode = '98007'
let fullAddress = `${firstName} ${lastName} \n${streetAddress} \n${city}, ${state} ${zipCode}`
console.log(fullAddress);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let address = `Brad Pitt \n6789 Belred Rd \nSeattle, WA 98124`;
console.log(address);

// Since the given address is expected to have its first empty space after the first name,
// Find the index of first empty space in the address,
// then use substring() method to split the address string from the beginning to the indexof empty space.
let fName = address.substring(0, address.indexOf(' '));
console.log(`First Name from the given address is: ${fName}`);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
// Parse Start Date to milliseconds
const startDate = new Date(2020, 0, 1);
console.log('Start date is: ', startDate);
const startDateMilliseconds = startDate.getTime();

// Parse End Date to milliseconds
const endDate = new Date(2020, 3, 1);
console.log('End date is: ', endDate);
const endDateMilliseconds = endDate.getTime();

// First calculate middle date milliseconds, by find the average of start date milliseconds, and end date milliseconds.
// Then use Date() to convert the middle date milliseconds to Date object.
const middleDateMilliseconds = (startDateMilliseconds + endDateMilliseconds) / 2;
const middleDate = new Date(middleDateMilliseconds);
console.log('Middle date is: ', middleDate);
