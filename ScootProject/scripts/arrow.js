function arrowClick(element) {
    let thisArrow = element;
    let thisParent = element.parentNode;
    let thisGrandParentElementId = thisParent.parentNode.id;

    let article = document.getElementById(thisGrandParentElementId);
    let paragraph = article.querySelector('p'); // Récupérer le paragraphe à l'intérieur de l'article

    console.log(article);
    console.log(paragraph);
    console.log(paragraph.classList)

    setTimeout(() => {
        paragraph.classList.toggle('none')
    }, 350)
    thisArrow.classList.toggle('up');
    thisArrow.classList.toggle('down')
    paragraph.classList.toggle('hide');
    paragraph.classList.toggle('show');
}
