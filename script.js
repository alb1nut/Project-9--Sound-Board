// Calling Butting Id from HTML
const buttons = document.getElementById('buttons')

// An array for Sounds Names
 sounds =['applause','boo','gasp','tada','victory','wrong']

//  Looping through eachsound name to create a button for each sound
sounds.forEach(sound => {
    // creating a button element
    let btn = document.createElement('button')
    // adding a class "btn" to each button
    btn.classList.add('btn')
// setting the innertext of each button to the sounds array names
    btn.innerText=sound

    
    // setting an event listener for each button
    btn.addEventListener('click' ,() =>{
        // To stop any souund being played
        stopSound()
        // selecting each button to play when clicked
      document.getElementById(sound).onplay()

    })

    // appending btn elements created to buttons in HTML
    buttons.appendChild(btn)
})

   // To stop any souund being played
function stopSound(){
    // get the sound that is currently playing
    let sounds =document.getElementById(sound)
// pause the sound
    sounds.pause()
    // reset the current sound time to 0 when stoped
    sounds.currentTime =0
}