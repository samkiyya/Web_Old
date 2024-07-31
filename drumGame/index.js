// for single button
// document.querySelector('.drum').addEventListener(
//     'click',handleClick
// );
let collection=document.querySelectorAll('.drum');

/******** usinng for loop ******/
// var numberOfDrumButtons=document.querySelectorAll('.drum').length;
// for(var i=0;i<numberOfDrumButtons;i++){
//     collection[i].addEventListener('click',handleClick);
// }

/******** using for ... of loop ********/
//deetecting button press
for (let btn of collection){

     btn.addEventListener(
        'click',function (){
            var ButtoninnerHTML=this.innerHTML;
            MakeSound(ButtoninnerHTML);
            buttonAnimation(ButtoninnerHTML);
        });
    // 'click',handleClick);
    // 'click',function (){ btn.style.color='white';});

}

//detecting keyboard key presss
document.addEventListener('keydown',function(event){
    MakeSound(event.key);
    buttonAnimation(event.key);
});

// to create sound egxample
function handleClick(){
    var audio=new Audio('sound/tom1.mp3');
    audio.play();
    
}

// a function that responds sound for either key press or button click
function MakeSound(key){
    switch (key) {
        case 'w':
            var tom1=new Audio('sound/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2=new Audio('sound/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3=new Audio('sound/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4=new Audio('sound/tom-4.mp3');
            tom4.play();
             break;
        case 'j':
            var snare=new Audio('sound/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash=new Audio('sound/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick=new Audio('sound/kick-bass.mp3');
            kick.play();
             break;
        default:
            console.log(key)
            break;
    }
}

// constructor function that generates object
function BellBoy(name,age,hasWorkPermit,languages){
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.languages=languages;
}
// innitiioalize object from the above function
var bellBoy1=new BellBoy('Timmy',19,true,['French','English']);

// create an animation for button press or key press corespond to eacch letter
function buttonAnimation(currentKey){
   var activeButton= document.querySelector('.'+currentKey);
   activeButton.classList.add('pressed');

   setTimeout(() => {
    activeButton.classList.remove('pressed');
   }, 100);
}