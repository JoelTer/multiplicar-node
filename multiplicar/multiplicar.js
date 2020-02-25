const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log("===============".blue);
    console.log(`Tabla del ${ base }`.blue);
    console.log("===============".blue);
    let data = '';
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor introducido ${ base } no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                rejects(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`.green);
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}