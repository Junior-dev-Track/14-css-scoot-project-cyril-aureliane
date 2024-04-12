function arrowClick(element) {

    alert('hello ' + id + ' from arrow.js');


    let thisArrow = element;
    let thisParent = element.parentNode;
    let thisGrandParentElementId = thisParent.parentNode.id;

    let article = document.getElementById(thisGrandParentElementId);
    let paragraph = article.querySelector('p'); // Récupérer le paragraphe à l'intérieur de l'article

    console.log(article);
    console.log(paragraph);
    console.log(paragraph.classList)






    // let thisParent = document.getElementById(thisParentId);

    // console.log(paragraph.textContent); // Affiche le contenu texte du paragraphe




    // console.log(thisParent);

  // // let thisArrow = document.getElementById(id);
  //   paragraph.classList.toggle('none')
    setTimeout(() => {
        paragraph.classList.toggle('none')
    }, 350)
    thisArrow.classList.toggle('up');
    thisArrow.classList.toggle('down')
    paragraph.classList.toggle('hide');
    paragraph.classList.toggle('show');






}


// $(document).on('click', '.burger', function() {
//     $(this).toggleClass('active');
//     $('nav').toggleClass('switch');
//     $('body').toggleClass('overflowNone');
//
// });

// <script>
//     const menuHamburger = document.querySelector(".menu-hamburger")
//     const navLinks = document.querySelector(".nav-links")
//
//     menuHamburger.addEventListener('click',()=>{
//     navLinks.classList.toggle('mobile-menu')
// })
// </script>