const button = document.querySelector('.button1');
const Myparagraph = document.querySelectorAll('p');

// Function to modify the text content of the paragraph
const changeText = () => {
Myparagraph.forEach(element => {
    element.textContent = "I changed because of an inline event handler.";

});
}
const alertText = () => {
    alert('Will I alert?');
    }
    

//Event handler properties
// Add event handler as a property of the button element
const button2 = document.querySelector('.button2');
button2.onclick = changeText;

// Listen for click event
const button3 = document.querySelector('.button3');
button3.addEventListener('click', changeText);

// Multiple listeners can be added to the same event and element
// An anonymous function on an event listener
button.addEventListener('click', () => {
    Myparagraph.forEach(element => {
        element.textContent = "Will I change?";
    
    });
        });
    button.addEventListener('click', alertText);
// Remove alert function from button element
button.removeEventListener('click', alertText);

// Test the keyCode, key, and code properties
document.addEventListener('keydown', event => {
    console.log('key: ' + event.keyCode);
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
    });









    