// To-do list ul element
const todoList = document.querySelector('ul');
// Create new to-do
const newTodo = document.createElement('li');
newTodo.textContent = 'Do homework';
// Add new todo to the end of the list
todoList.appendChild(newTodo);

//to-do body
const x=document.querySelector('body');
const paragraph = document.createElement('p');
paragraph.textContent = "I'm a brand new paragraph.";
x.appendChild(paragraph);
// Create new to-do
const anotherTodo = document.createElement('li');
anotherTodo.textContent = 'Pay bills';
// Add new to-do to the beginning of the list
todoList.insertBefore(anotherTodo, todoList.firstElementChild);

// Create new to-do for modifying the existing one
const modifiedTodo = document.createElement('li');
modifiedTodo.textContent = 'Feed the dog';
// Replace existing to-do with modified to-do
todoList.replaceChild(modifiedTodo, todoList.children[2]);
todoList.removeChild(todoList.lastElementChild);
// Remove second element child from todoList
todoList.children[1].remove();
// Get a NodeList of all .demo elements
const demoClasses = document.querySelectorAll('.demo-class');
// Change the text of multiple elements with a loop
demoClasses.forEach(element => {
element.textContent = 'All demo classes updated.';
});