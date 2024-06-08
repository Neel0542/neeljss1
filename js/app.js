// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object for text-to-speech functionality
var synth = window.speechSynthesis;

// Arrays containing random phrases for generating the story
var nouns = ['The turkey', 'Mom', 'The Dog', 'My teacher', 'The elephant', 'The cat'];
var verbs = ['Sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Button elements for each part of the story and other functionalities
var nounButton = document.querySelector('#noun-button');
var verbButton = document.querySelector('#verb-button');
var adjectiveButton = document.querySelector('#adjective-button');
var noun2Button = document.querySelector('#noun2-button');
var placeButton = document.querySelector('#place-button');
var speakButton = document.querySelector('#speak-button');
var resetButton = document.querySelector('#reset-button');
var storyButton = document.querySelector('#story-button');

// Variable to hold the text that will be spoken
var textToSpeak = '';

/* Functions
-------------------------------------------------- */
// Function to speak the provided text using the Web Speech API
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

// Function to get a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a random story by picking random elements from each array
function generateStory() {
  textToSpeak = ''; // Reset the textToSpeak variable
  textToSpeak += getRandomElement(nouns) + ' ';
  textToSpeak += getRandomElement(verbs) + ' ';
  textToSpeak += getRandomElement(adjectives) + ' ';
  textToSpeak += getRandomElement(nouns2) + ' ';
  textToSpeak += getRandomElement(places);
  
  // Update the HTML element with the generated story
  document.querySelector('#story-text').innerHTML = textToSpeak;
}

// Function to reset the story text
function resetStory() {
  textToSpeak = ''; // Clear the textToSpeak variable
  document.querySelector('#story-text').innerHTML = ''; // Clear the displayed story
}

/* Event Listeners
-------------------------------------------------- */
// Event listener for the noun button
nounButton.onclick = function() {
  let noun = getRandomElement(nouns); // Get a random noun
  speakNow(noun); // Speak the random noun
  textToSpeak += noun + ' '; // Append the noun to the textToSpeak variable
  document.querySelector('#story-text').innerHTML = textToSpeak; // Update the displayed story
}

// Event listener for the verb button
verbButton.onclick = function() {
  let verb = getRandomElement(verbs); // Get a random verb
  speakNow(verb); // Speak the random verb
  textToSpeak += verb + ' '; // Append the verb to the textToSpeak variable
  document.querySelector('#story-text').innerHTML = textToSpeak; // Update the displayed story
}

// Event listener for the adjective button
adjectiveButton.onclick = function() {
  let adjective = getRandomElement(adjectives); // Get a random adjective
  speakNow(adjective); // Speak the random adjective
  textToSpeak += adjective + ' '; // Append the adjective to the textToSpeak variable
  document.querySelector('#story-text').innerHTML = textToSpeak; // Update the displayed story
}

// Event listener for the second noun button
noun2Button.onclick = function() {
  let noun2 = getRandomElement(nouns2); // Get a random noun from the second noun array
  speakNow(noun2); // Speak the random noun
  textToSpeak += noun2 + ' '; // Append the noun to the textToSpeak variable
  document.querySelector('#story-text').innerHTML = textToSpeak; // Update the displayed story
}

// Event listener for the place button
placeButton.onclick = function() {
  let place = getRandomElement(places); // Get a random place
  speakNow(place); // Speak the random place
  textToSpeak += place; // Append the place to the textToSpeak variable
  document.querySelector('#story-text').innerHTML = textToSpeak; // Update the displayed story
}

// Event listener for the speak button
speakButton.onclick = function() {
  speakNow(textToSpeak); // Speak the text stored in textToSpeak
}

// Event listener for the story button
storyButton.onclick = function() {
  generateStory(); // Generate a random story
  speakNow(textToSpeak); // Speak the generated story
}

// Event listener for the reset button
resetButton.onclick = function() {
  resetStory(); // Reset the story
}