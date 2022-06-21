const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base = 5, listar=false, hasta = 10) => {

    try {



        let salida = ''
        let consola = ''
    
        for( let i=1; i <= hasta; i++ ) {
        salida  +=  (`${ base } x ${ i } = ${base * i}\n`);
        consola +=  (`${ base } x ${ i} ${'='.blue} ${base * i}\n`);
        }
    

        if (listar) {
            console.log("_____________________________________".green);
            console.log("_____________TABLA DEL", colors.blue (base) );
            console.log("_____________________________________".green);
            
            console.log(consola);

        

        }
    
    
        fs.writeFileSync( `tabla-${ base }.txt`, salida);
    
    
        return `tabla-${ base }  CREADA EXITOSAMENTE`;
    } catch (error) {

        throw error;
        
    }
    





}


module.exports =  {
    crearArchivo}