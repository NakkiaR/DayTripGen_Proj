"use strict";

//Welcome
function welcomeMessage(message) {
    message = "";
    return message;
}   
let userName = prompt("Welcome to the online day trip planner. Please enter your first name to get started.");
alert ("Hi " + userName + "!" + " Let's get started with planning your day trip!    You will receive prompts to select different options to plan your trip. You'll book the city, mode of transportation, restaurant, and entertainment.     You will have the opportunity to confirm or change your trip throughout.    Let's begin! --- Please note: This is a random generator, meaning you may see the same items being displayed multiple times.");

//Destination

let locations = ["Sedona ", "Flagstaff ", "Phoenix ", "Tucson ", "Tombstone ", "Grand Canyon "];

function getDayTrip(myDayTrip) {
    return myDayTrip = myDayTrip[Math.floor(Math.random() * myDayTrip.length)];
}
let userAcceptsDestination = getDayTrip(locations);

let userAccepts = false;
while (userAccepts === false) {
    alert(userAcceptsDestination);
    let userInput1 = prompt("Would you like to go to " + userAcceptsDestination + "? Enter 'yes' to confirm this destination or 'no' to select a different one."); 
    if (userInput1 === "no") {
        userAcceptsDestination = getDayTrip(locations);
    } else {
    userAccepts = true;
    }
}
    alert ("City: " + userAcceptsDestination + " Next, let's choose your mode of transportation!");
    console.log("You are going to " + userAcceptsDestination);


//Transportation

let transportation = ["Personal Car ", "Party Bus ", "Uber ", "Limo ", "Plane ", "Cruiser "];

    function getTripTransportation(myDayTransport) {
        return myDayTransport[Math.floor(Math.random() * myDayTransport.length)];
    }
    let userAcceptsTransportation = getTripTransportation(transportation);
    
    let userAccepts2 = false;
    while (userAccepts2 === false) {
        alert(userAcceptsTransportation);
        let userInput1 = prompt("Would you like to go by " + userAcceptsTransportation + "? Enter 'yes' to confirm this transportation or 'no' to select a different one."); 
        if (userInput1 === "no") {
            userAcceptsTransportation = getTripTransportation(transportation);
        } else {
        userAccepts2 = true;
        }
    }
        alert ("Mode of transportation: " + userAcceptsTransportation + " Next, let's choose your restaurant!");
        console.log("You are going by " + userAcceptsTransportation);


//Restaurant

let restaurants = ["Micky and D's ", "Burgers are King ", "Dairy Farm Queen ", "Jack's Lunch Box ", "Wendel's Restaurant ", "The Express Panda "];

    function getTripRestaurant(myRestaurant) {
        return myRestaurant[Math.floor(Math.random() * myRestaurant.length)];
    }
    let userAcceptsRestaurant = getTripRestaurant(restaurants);
    
    let userAccepts3 = false;
    while (userAccepts3 === false) {
        alert(userAcceptsRestaurant);
        let userInput1 = prompt("Would you like to est at " + userAcceptsRestaurant + "? Enter 'yes' to confirm this restaurant or 'no' to select a different one."); 
        if (userInput1 === "no") {
            userAcceptsRestaurant = getTripRestaurant(restaurants);
        } else {
        userAccepts3 = true;
        }
    }
        alert ("Restaurant: " + userAcceptsRestaurant + " Last, but certainly not least, let's choose your entertainment!");
        console.log("You are eating at " + userAcceptsRestaurant);


//Entertainment

let entertainment = ["True Escape if You Can Room ", "Don't Slip Bowling Lanes ", "Real Snakes Arcade Bar ", "Fall from the Sky - Sky Dive Center ", "Broken Bungie - Cliff Jumping ", "Scorching Heat Desert Tours"];

    function getTripEntertainment(myEntertainment) {
        return myEntertainment[Math.floor(Math.random() * myEntertainment.length)];
    }
    let userAcceptsEntertainment = getTripEntertainment(entertainment);
    
    let userAccepts4 = false;
    while (userAccepts4 === false) {
        alert(userAcceptsEntertainment);
        let userInput1 = prompt("Would you like to experience " + userAcceptsEntertainment + "? Enter 'yes' to confirm this entertainment venue or 'no' to select a different one."); 
        if (userInput1 === "no") {
            userAcceptsEntertainment = getTripEntertainment(entertainment);
        } else {
        userAccepts4 = true;
        }
    }
        alert ("Entertainment: " + userAcceptsEntertainment + " Congratulations! Now, let's get your trip confirmed so you can get to having some fun!");
        console.log("You are going to " + userAcceptsEntertainment);

    let userInput = prompt("Review your selections: " + "You are traveling to " + userAcceptsDestination + " by " + userAcceptsTransportation + "where you'll enjoy fine cuisine at " + userAcceptsRestaurant + ", and enjoy the experince of " + userAcceptsEntertainment + "." + " Would you like to keep this day trip? Type, 'yes' to confirm or refresh if you would like to start over.");

    function getNewTrip(newDayTrip) {
        getDayTrip = (newDayTrip);    
        }   
        console.log ("Congratulations! You have confirmed your destination!");
    alert ("Congratulations! You have confirmed your destination! Print your itinerary. Enjoy your trip!");    
