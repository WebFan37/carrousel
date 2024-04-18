(function(){
    console.log("Vive Javascrip")

    
    /*************************************************** */
    //boite carrousel
    let carrousel = document.querySelector('.carrousel')
    console.log(carrousel.tagName)

    //bouton ouvrir
    let bouton = document.querySelector('.bouton__ouvrir')
    console.log(bouton.tagName)

    //bouton fermer
    let boutonfermer = document.querySelector('.carrousel__x')
    console.log(boutonfermer.tagName)

    //bouton galerie
    let galerie = document.querySelector('.galerie')
    console.log(galerie.tagName)

    
    
    
    //creation dynamique d'une image du carrousel//
    //========================================//

     //Figure Carrousel
    let carrousel_figure = document.querySelector('.carrousel__figure')
    carrousel_figure.appendChild(carrousel_img)
    
    //Image Carrousel (creation dynamique)
    let carrousel_img = document.createElement('img')
    carrousel_img.classList.add('carrousel__img')

    //Image Galerie
    let galerie_img = galerie.querySelectorAll("img")
    console.log(galerie_img.src)

    //Boucle affichage image galerie
    for (const element of galerie_img) {
        carrousel_img.src = element.src
    }

   
    
    //Afficher la premiere image de la galerie
    // carrousel_img.src = galerie_img.src

    /************************************************** */
    /************************************************** */

    //Ouvrir la boite
    bouton.addEventListener('click', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })

    //Fermer la boite
    boutonfermer.addEventListener('click', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })
})