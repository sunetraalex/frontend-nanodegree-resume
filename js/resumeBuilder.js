/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Alessandro");

// var firstname = "Alessandro";

// var age = 20;

// console.log(firstname);

var awesomeThoughts = "I am Alessandro and i am AWESOME!";

console.log(awesomeThoughts)

// var email = "sunetraalex@libero.it";

// var newEmail = email.replace("libero.it", "gmail.com");

// console.log(email);
// console.log(newEmail);

// var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

// $("#main").append(funThoughts);

var name = "Alessandro Cutolo";
var role = "Web Developer";



var myArray = ["Alessandro", "Cutolo", "Web", "Designer", ].length
console.log(myArray)

var bio = {
    "name": "Alessandro Cutolo",
    "role": "Web Developer",
    "contacts": {
        "mobile": "328 555 2771",
        "email": "sunetraalex@gmail.com",
        "github": "sunetraalex",
        "location": "San Giuliano Milanese",
    },
    "welcomeMessage": "I like to build awesome websites",
    "skills": [
        "Python", "HTML & CSS", "Django"
    ],
    "bioPic": "images/fry.jpg"
};

var formattedName       = HTMLheaderName.replace("%data%", bio.name);
var formattedRole       = HTMLheaderRole.replace("%data%", bio.role);
var formattedmobile     = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedemail      = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub     = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlocation   = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedbioPic     = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedskills     = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);
$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMsg);
$("#header").append(formattedskills);
