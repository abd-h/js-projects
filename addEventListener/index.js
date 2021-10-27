/*
The JavaScript addEventListener() method allows you to set up
 functions to be called when a specified event happens, such as when a user clicks a button. 
 This tutorial shows you how you can implement addEventListener() in your code.

Understanding Events and Event Handlers
Events are actions that happen when the user or browser manipulates a page. 
They play an important role as they can cause elements of a web page to change dynamically.

For example, when the browser finishes loading a document, then a load event occurred. 
If a user clicks a button on a page, then a click event has happened.

Many events can happen once, multiple times, or never. 
You also may not know when an event will happen, especially if it is user generated.

In these scenarios, you need an event handler to detect when an event happens. 
This way, you can set up code to react to events as they happen on the fly.

JavaScript provides an event handler in the form of the addEventListener() method. 
This handler can be attached to a specific HTML element you wish to monitor events 
for, and the element can have more than one handler attached.

addEventListener() Syntax
Here's the syntax:


This is a simple example I made which shows you addEventListener() in action.

When a user clicks the button, a message is displayed. Another button click hides the message. 
Here's the relevant JavaScript:*/

let button = document.querySelector('.button');
let message = document.querySelector("#message");

button.addEventListener("click", () => {
    message.classList.toggle("reveal");
    console.log("button clicked");
});

/*
    Going by the syntax shown previously for addEventListener():

target: HTML element with id='button'
function: anonymous (arrow) function that sets up code necessary 
    .to reveal/hide the message
useCapture: left to default value of false

My function is able to reveal/hide the message by adding/
removing a CSS class called "reveal" which changes the message 
element's visibility.

Of course in your code, feel free to customize this function. 
You may also replace the anonymous function with a named 
function of your own.

***Passing Event as a Parameter***
Sometimes we may want to know more information about the event, 
such as what element was clicked. In this situation, we need to 
pass in an event parameter to our function.

This example shows how you may obtain the element's id:*/

button.addEventListener("click", (e) => {
    console.log(e.target.id)
})
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Passing Event as a Parameter
Sometimes we may want to know more information about the event, 
such as what element was clicked. In this situation, we need to 
pass in an event parameter to our function.

This example shows how you may obtain the element's id:*/