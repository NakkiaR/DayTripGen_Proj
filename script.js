"use strict";

//Welcome
//function welcomeMessage() {
let userName = prompt("Welcome to the online day trip planner. Please enter your first name.");
alert ("Hello " + userName + "!" + " Let's get started with planning your day trip!");
//}

//Destination
//function getDayTrip() {
let myDayTrip = ["Sedona", "Flagstaff", "Phoenix"];
let dayTripDestination = myDayTrip[Math.floor(Math.random() * myDayTrip.length)];
alert ("City: " + dayTripDestination);
// let userInput = prompt("Would you like to keep this destination? Type, 'yes' or 'no' below.");
// if(userInput == "yes") {
//     alert ("Great! Next-Let's grab your transportation!");
console.log("You are going to " + dayTripDestination);
// }
// else {
// alert ("Okay, No worries! Please refresh the page to grab another option.");

// }
//
//}

//Transportation
//function getTripTransportation() {
let myTripTransportation = ["car", "bus", "Uber"];
let tripTransportation = myTripTransportation[Math.floor(Math.random() * myTripTransportation.length)];
alert ("Mode of transportation: " + tripTransportation);
// userInput = prompt("Would you like to keep this mode of transportation? Type, 'yes' or 'no' below.");
// if(userInput == "yes") {
//     alert ("Fantastic! Next-Let's find some food!");
console.log("Your mode of transportation will be by " + tripTransportation);
// }
// else {
//     alert ("Okay, no problem! Hit that refresh button to grab a different mode!")
// }
//
//}

//Restaurant
//function getTripRestaurant() {
if(dayTripDestination == "Sedona") {
    let myRestaurantSedona = ["Casa Sedona Restaurant", "Mesa Grill Sedona", "Creekside American Bistro"];
    let tripRestaurant;
    tripRestaurant = myRestaurantSedona[Math.floor(Math.random() * myRestaurantSedona.length)];
    alert ("Restaurant: " + tripRestaurant);
    console.log("Your place of grub will be" + tripRestaurant);
}
    else if(dayTripDestination === "Flagstaff") {
        let myRestaurantFlagstaff = ["Big Canyon BBQ ", "MartAnnes Burrito Palace", "Fat Olives"];
        let tripRestaurant;
        tripRestaurant = myRestaurantFlagstaff[Math.floor(Math.random() * myRestaurantFlagstaff.length)];
        alert ("Restaurant: " + tripRestaurant);
    console.log("Your place of chow will be " + tripRestaurant);
}
    else if(dayTripDestination === "Phoenix") {
        let myRestaurantPhoenix = ["Kaizen", "Character Distinctive Dining", "Blue Hound Kitchen & Cocktails"];
        let tripRestaurant;
        tripRestaurant = myRestaurantPhoenix[Math.floor(Math.random() * myRestaurantPhoenix.length)];
        alert ("Restaurant: " + tripRestaurant);
    console.log("Your place of yum will be " + tripRestaurant);
}
//     userInput = prompt("Does this sound good? Type, 'yes' or 'no' below.");
//     if(userInput == "yes") {
//         alert ("Great choice! Finally-Let's find some entertainment!");
// }
//     else {
//         alert ("Sure thing! Click refresh to find a different restaurant!");
        
//}
//}

//Entertainment
//function getTripEntertainment() {
if(dayTripDestination === "Sedona") {
    let myEntertainmentSedona = ["Mary D. Fisher Theater", "Vino Di Sedona", "Sedona UFO Vortex Tours"];
    let tripEntertainment;
    tripEntertainment = myEntertainmentSedona[Math.floor(Math.random() * myEntertainmentSedona.length)];
    alert ("Entertainment: " + tripEntertainment);
console.log("Have a wonderful time at " + tripEntertainment);
}
else if(dayTripDestination === "Flagstaff") {
    let myEntertainmentFlagstaff = ["Escape Rooms Flagstaff", "Starlite Lanes", "Orpheum Theater"];
    let tripEntertainment;
    tripEntertainment = myEntertainmentFlagstaff[Math.floor(Math.random() * myEntertainmentFlagstaff.length)];
    alert ("Entertainment: " + tripEntertainment);
console.log("Have fun at " + tripEntertainment);
}
else if(dayTripDestination === "Phoenix") {
    let myEntertainmentPhoenix = ["FilmBar", "Copper Blues Rock Pub & Kitchen", "Cobra Arcade Bar"];
    let tripEntertainment;
    tripEntertainment = myEntertainmentPhoenix[Math.floor(Math.random() * myEntertainmentPhoenix.length)];
    alert ("Entertainment: " + tripEntertainment);
console.log("Have a great time at " + tripEntertainment);
}

//Confirmation
//function confirmTrip() {
let userInput = prompt("Review the selections below. Would you like to keep this day trip? Type, 'yes' or 'no' below.");
if(userInput == "yes") {
alert ("Great! Have a wonderful time!");
}
else {
alert ("Okay, No worries! Please refresh the page to start over.");
}
//}
