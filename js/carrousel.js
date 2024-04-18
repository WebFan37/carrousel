(function(){
    console.log("Vive Javascrip")

    let carrousel = document.querySelector('.carrousel')
    console.log(carrousel.tagName)

    let bouton = document.querySelector('.bouton__ouvrir')
    console.log(bouton.tagName)

    let boutonfermer = document.querySelector('.carrousel__x')
    console.log(boutonfermer.tagName)

    //Ouvrir la boite
    bouton.addEventListener('click', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })

    //Fermer la boite
    boutonfermer.addEventListener('click', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })
})