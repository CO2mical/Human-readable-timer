// Prompt user for their name and the time of the movie
const userName = window.prompt("Enter your name please:");
const movieDurationInMinutes = window.prompt("Enter the movie duration in minutes:");
// Convert the total minutes into hours and minutes
const movieMinutes = movieDurationInMinutes % 60;
const movieHours = (movieDurationInMinutes - movieMinutes) / 60; // It didn't want to work with math.floor(), so now it's done in a worse way
// Display the result in a human-readable format
const result = "Hello " + userName + ". your input was " + movieDurationInMinutes + " minutes.<div> Output: " + movieHours + " hours and " + movieMinutes + " minutes </div>";
document.write("<p>" + result + "</p>");