

const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');


const argv =require('./config/yargs');



console.log( argv );






crearArchivo( argv.b, argv.l, argv.h )
   .then( nombreArchivo => console.log(nombreArchivo.bgBlue.black, 'creado') )
    .catch( err => console.log(err) );