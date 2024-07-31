// Select the first div
const div = document.querySelector('div');
// Assign the warning class to the first div
div.className = 'warning';
// Select the second div by class name
const activeDiv = document.querySelector('.active');
activeDiv.classList.add('hidden'); //Add the hidden class
activeDiv.classList.remove('hidden'); //Remove the hidden class
activeDiv.classList.toggle('hidden'); //Switch between hidden true and false
activeDiv.classList.replace('active', 'warning');//Replace active class with warning class