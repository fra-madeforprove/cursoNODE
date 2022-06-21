const  argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                describe: 'es la base de la tabla de multiplicar',
                default: false
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'limite de numero',
                default: false
            })
            .check( (argv, option) =>{
                if(isNaN(argv.base) ){
                    throw ' LO SIENTO DE NAN'
                }
                return true;
         
            })
            .argv;

            module.exports = argv; 