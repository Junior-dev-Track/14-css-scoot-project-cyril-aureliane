// Convertion px -> vw
// * Function
function responsiveSize(size,screenSize) {

    let responsive = (size/screenSize)*100
    let result = `width: ${responsive.toFixed(3)}vw;`
    console.log(result)
}
// ** Unit
let screenSize = [375, 768, 1024, 1226, 1440 ]
let [   phone,
        ipadMini,
        tablet,
        laptop,
        desktop ] = screenSize

// ** Call to fonction

responsiveSize(200, ipadMini)
