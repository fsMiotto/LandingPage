//window.sr = ScrollReveal({ reset:true });

//sr.reveal('.teamHidden', {duration: 1000});


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        let targetElement = entry.target;
        if(targetElement.classList.contains('teamHidden')){
            if(entry.isIntersecting){
                entry.target.classList.add('teamShow')
            } else{
                entry.target.classList.remove('teamShow')
            }
        } else if(targetElement.classList.contains('textHidden')){
            if(entry.isIntersecting){
                entry.target.classList.add('textShow')
            } else{
                entry.target.classList.remove('textShow')
            }
        }

    })
})

const teamElements = document.querySelectorAll('.teamHidden')
const textElements = document.querySelectorAll('.textHidden')

teamElements.forEach((element) => myObserver.observe(element))
textElements.forEach((element) => myObserver.observe(element))