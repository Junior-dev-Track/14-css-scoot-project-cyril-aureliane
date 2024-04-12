function arrowClick(element) {
    let thisArrow = element;
    let thisParent = element.parentNode;
    let article = thisParent.parentNode;
    let paragraph = article.querySelector('p'); // Récupérer le paragraphe à l'intérieur de l'article

        setTimeout(() => {
            paragraph.classList.toggle('none')
        }, 350)
        thisArrow.classList.toggle('up');
        thisArrow.classList.toggle('down')
        paragraph.classList.toggle('hide');
        paragraph.classList.toggle('show');
}
