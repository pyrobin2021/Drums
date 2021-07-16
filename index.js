

 // button press
var numOfDrums = document.querySelectorAll(".drum").length;
for(var i=0; i<numOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    handleEvent(this.innerHTML);
    doAnimation(this.innerHTML);
  })
}
// keyboard press
document.addEventListener("keydown", function(events){

  handleEvent(events.key);
  doAnimation(events.key);
})


// sound function
function handleEvent(eve){
  switch(eve){
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play()
    break;

    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    default:
    console.log(eve);
  }

}
// add some animation on the site

function doAnimation(theKey){
  var activeKey =document.querySelector("."+theKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  },100)

}
