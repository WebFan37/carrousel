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

    //bouton gauche et droite
    let leftButton = document.querySelector('.previous');
    let rightButton = document.querySelector('.next');

     /*************************************************** */
      /*************************************************** */


      //BOUTON GAUCHE ET DROITE
    //=======================//
    rightButton.addEventListener('click', function(event){
        change_image_suivant(event)
    })

    leftButton.addEventListener('click', function(event){

        change_image_precedent(event)
    })

    //=======================//
    //=======================//


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


     //Choisir toutes les images de la galerie
     let galerie__img = galerie.querySelectorAll("img")
        // console.log("DISPLAYING ALL IMAGES", galerie__img)
    

        //Index image
     let index = 0
     //Pour chaque image de la galerie, creer une image du carrousel
     for (const unImage of galerie__img) 
     {
         //Affichage image galerie (Fonction)
         create_image_carrousel(index, unImage)
 
         //Affichage radio carrousel (Fonction)
         create__radio_carrousel(index)

         //Incrementation de l'index
         index = index + 1
        
     }

     /**
     * Creer l'image du carrousel a partir de la galerie
     * @param {*} index le numero de l'image
     * @param {*} unImage l'image de la galerie
     */
    function create_image_carrousel(index, unImage){
        // console.log(unImage.src) Testing

         /*=======Image Carrousel (creation dynamique)======*/
         /*=================================================*/

         //Creation de l'image avec createElement('img')
        let carrousel__img = document.createElement('img')

        //Ajout et savoir la source de l'image
        carrousel__img.src = unImage.src
    
        //Ajout de la classe carrousel__img ????
        carrousel__img.classList.add('carrousel__img')

        //Index image ????
        carrousel__img.dataset.index = index

        //Adjuster l'opacité a 1 pour la premiere image
        if(index == 0){
            carrousel__img.style.opacity = 1
        }

        //Affichage image carrousel dans la figure
        carrousel__figure.appendChild(carrousel__img)
    }

    /***
     * Creer le radio du carrousel
     * @param {*} index le numero de radio
     */
    function create__radio_carrousel(){
        let carrousel__radio = document.createElement('input')
        let carrousel__form = document.querySelector('.carrousel__form')
        

        //ajouter index image au radio
        carrousel__radio.dataset.index = index

        //ajouter classe carrousel__radio
        carrousel__radio.classList.add('carrousel__radio')

        //ajouter type radio
        carrousel__radio.type = 'radio'

        //ajouter le nom 
        carrousel__radio.name = 'carrousel__radio'

        //ajouter fans carrousel_form
        carrousel__form.appendChild(carrousel__radio)

        //ajouter ecouteur sur bouttons qui permettra de changer l'image du carrousel
        carrousel__radio.addEventListener('click', function(event){
            
            for (const unImage of carrousel__figure.children){
                unImage.style.opacity = 0
                //Change the opacity 
            }
            carrousel__figure.children[event.target.dataset.index].style.opacity = 1
        })

    }

    function change_image_suivant(){

        //Avoir l'index de l'image actuelle.
        const tousImages = carrousel__figure.querySelectorAll('.carrousel__img')

        //Definit l'index de l'image actuelle
        let IndexImageActuelle;


        //Parcourir toutes les images du carrousel
        //Si l'opacité de l'image est à 1
        //Alors l'index de l'image actuelle est l'index de l'image
        for (let index = 0; index < tousImages.length; index++) {
            if(tousImages[index].style.opacity === '1'){
                IndexImageActuelle = parseInt(tousImages[index].dataset.index);
                break;
            }
        }

        //Calculer l'Index de l'image suivante
        let IndexImageSuivante = IndexImageActuelle + 1

        //Si l'index de l'image suivante est superieur au nombre d'images
        //Alors l'index de l'image suivante est 0
        if(IndexImageSuivante >= carrousel__figure.children.length){
            
            IndexImageSuivante = 0;
        }

        //Changer et mettre à jour l'image du carrousel
        //Avec le boucle for
        for (const unImage of carrousel__figure.children){
            unImage.style.opacity = 0
        }

        //Afficher l'image dans l'index spécifié
        carrousel__figure.children[IndexImageSuivante].style.opacity = 1

    }

    function change_image_precedent(){

       //Avoir l'index de l'image actuelle.
       const tousImages = carrousel__figure.querySelectorAll('.carrousel__img')

       //Definit l'index de l'image actuelle
       let IndexImageActuelle;


       //Parcourir toutes les images du carrousel
       //Si l'opacité de l'image est à 1
       //Alors l'index de l'image actuelle est l'index de l'image
       for (let index = 0; index < tousImages.length; index++) {
           if(tousImages[index].style.opacity === '1'){
               IndexImageActuelle = parseInt(tousImages[index].dataset.index);
               break;
           }
       }

        //Calculer l'Index de l'image précédente
        let IndexImagePrecedent = IndexImageActuelle - 1

        //Si l'index de l'image suivante est inférieur au nombre d'images
        //Alors l'index de l'image suivante est la longueur des images
        if(IndexImagePrecedent < 0){
            
            IndexImagePrecedent = carrousel__figure.children.length - 1;
        }

        //Changer et mettre à jour l'image du carrousel
        //Avec le boucle for
        for (const unImage of carrousel__figure.children){
            unImage.style.opacity = 0
        }

        //Afficher l'image dans l'index spécifié
        carrousel__figure.children[IndexImagePrecedent].style.opacity = 1
        

    }
        


    
    
})()


    