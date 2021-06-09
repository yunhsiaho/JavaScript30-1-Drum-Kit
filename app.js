//event is get the keydown-key's information.


function playSound (event){
    // console.log(event.keycode);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    console.log(audio);
    if(!audio)return;// stop the audio from running all together == stop keep running the function
    audio.currentTime = 0; //everytime hitting the keys, it'll replay audio right away
    audio.play();//play the sound --2
    key.classList.add('playing');//add class name "playing" on the key element, to activate the transform --3
}
function removeTransition(e){
    if(e.propertyName!== 'transform') return; //skip it if there's no transform in CSS
    this.classList.remove('playing');//remove the class name "playing" after the transform, to return into original shape --5
    //this is THIS audio/key element
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));//when transitionend, go to removeTransition function--4
window.addEventListener('keydown', playSound);//when key down, go to playSound function --1