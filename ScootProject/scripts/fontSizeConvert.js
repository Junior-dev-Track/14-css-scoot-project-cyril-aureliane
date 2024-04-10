// Unit
let fontSize=24;
let lineHeight=28;
let letterSpacing=-1.07;


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