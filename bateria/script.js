document.body.addEventListener('keydown', (event)=>{
   playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split('');
        playcomposition(songArray);
    }

})

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play()
    }

    if(keyElement){
        keyElement.classList.add('active')
        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 200)
    }
}

function playcomposition(songArray){
    wait = 0;

    for(let songitem of songArray){
       setTimeout(()=> {
        playSound(`key${songitem}`)
       }, wait)
       wait += 300;
    }
}