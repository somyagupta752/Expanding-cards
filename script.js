const panels = document.querySelectorAll('.panel')

panels.forEach((p)=>{
    
    
    p.addEventListener('click', () =>{
        console.log("clicke")
        removeActiveClasses()
        p.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}