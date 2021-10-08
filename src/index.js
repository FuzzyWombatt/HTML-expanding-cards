//select all divs of class panel
const panels = document.querySelectorAll('.panel')
//onClick adds active class
panels.forEach( (panel) => {
    panel.addEventListener( 'click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
//loops through removing active class
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}