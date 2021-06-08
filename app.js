//event is get the keydown-key's information.
window.addEventListener('keydown', playSounds())

function playSounds (event){
    // console.log(event.keycode);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    console.log(audio);
    if(!audio)return// stop the audio from running all together == stop keep running the function
    audio.currentTime = 0; //everytime hitting the keys, it'll replay audio right away
    audio.play();
    key.classList.add(playing);
}
function removeTransition(e){
    if(e.propertyName!== 'transform') return; //skip it if it's not a transform
    console.log(e.propertyName);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))