// Unit
let fontSize=15;
let lineHeight=25;
let letterSpacing=0;
<<<<<<< HEAD

let screenSize = [576, 768, 1024, 1226, 1440 ]
let [phone, ipadMini, tablet, laptop, desktop ] = screenSize


function responsiveSize(size, ) {

}

=======
>>>>>>> e571c5d (* . img .round uprgrade)

// Function
// convert fontSize in rem ,lineHeight & letterSpacing in em unit
function converter(fontSize,lineHeight,letterSpacing){
     let size =(fontSize/16).toFixed(3);
     let height=(lineHeight/fontSize).toFixed(3);
     let spacing=(letterSpacing/fontSize).toFixed(3);

        let result=
            `font-size: ${size}rem;\n`+
            `line-height: ${height}em;\n`+
            `letter-spacing: ${spacing}em;\n`;

    console.log(result);
}
converter(fontSize,lineHeight,letterSpacing)

// faire une convertion px -> vw