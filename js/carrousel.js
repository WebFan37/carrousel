(function (){

    //console.log("Vive Javascript")

     /*************************************************** */
     /*************************************************** */
    //boite carrousel
    let carrousel = document.querySelector('.carrousel')

    //bouton ouvrir
    let bouton = document.querySelector('.bouton__ouvrir')

    //bouton fermer
    let boutonfermer = document.querySelector('.carrousel__x')

    //bouton galerie
    let galerie = document.querySelector('.galerie')

     /*************************************************** */
      /*************************************************** */


    //Ouvrir la boite
    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })

    //Fermer la boite
    boutonfermer.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })


      //creation dynamique d'une image du carrousel//
    //========================================//

     //Figure Carrousel
    let carrousel__figure = document.querySelector('.carrousel__figure')
    // carrousel__figure.appendChild(carrousel_img)


     //Image Galerie
     let galerie__img = galerie.querySelectorAll("img")
        // console.log("DISPLAYING ALL IMAGES", galerie__img)
    
     let index = 0
     //Boucle affichage image galerie
     for (const unImage of galerie__img) 
     {
         //Affichage image galerie
         create_image_carrousel(index, unImage)
         index = index + 1
 
         //Affichage radio carrousel
         create__radio_carrousel(index)
         
        
     }

     /**
     * Creer l'image du carrousel a partir de la galerie
     * @param {*} index le numero de l'image
     * @param {*} unImage l'image de la galerie
     */
    function create_image_carrousel(index, unImage){
        // console.log(unImage.src) Testing

         /*=======Image Carrousel (creation dynamique)======*/
        let carrousel__img = document.createElement('img')
        carrousel__img.src = unImage.src
    
        //Ajout de la classe
        carrousel__img.classList.add('carrousel__img')

        //Index image
        carrousel__img.dataset.index = index

        //Affichage image carrousel
        carrousel__figure.appendChild(carrousel__img)
    }

    /***
     * Creer le radio du carrousel
     * @param {*} index le numero de radio
     */
    function create__radio_carrousel(index){
        let carrousel__radio = document.createElement('input')
        let carrousel__img = document.querySelectorAll('.carrousel__img')
        let carrousel__form = document.querySelector('.carrousel__form')

        let indexCarrousel = carrousel__radio.dataset.index

        //ajouter classe
        carrousel__radio.classList.add('carrousel__radio')

        //ajouter index
        carrousel__radio.dataset.index = index

        //ajouter type radio
        carrousel__radio.type = 'radio'

        //ajouter name
        carrousel__radio.name = 'carrousel__radio'

        //ajouter fans carrousel_form
        carrousel__form.appendChild(carrousel__radio)

        //ajouter ecouteur qui permettra de changer l'image du carrousel
        carrousel__radio.addEventListener('change', function(){

            //Change the opacity 
            // carrousel__img.children[index].style.opacity = 1 

            for (const unImage of carrousel__img){
                if (carrousel__radio.dataset.index == indexCarrousel){
                    unImage.style.opacity = 1
                } else {
                    unImage.style.opacity = 0
                }
                
            }
            
            
            
        })
    }
    
    
})()


    