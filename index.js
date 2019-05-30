const {argv} = require('./yargs');
const funciones = require('./funciones');

let comando = argv._[0];

switch(comando){
    case 'crear':
        funciones.crear(argv);
    break;
    case 'mostrar': 
        funciones.mostrar();
    break;
    case 'buscar':
        funciones.mostrarEstudiante(argv.id);
    break;
    case 'mostrarMatematica':
        funciones.mostrarMateria();
    break;
    case 'promedio':
        funciones.promedio(argv.id);
    break;
    case 'mejorPromedio':
        funciones.mejorPromedio();
    break;
    default:
        console.log('Ingreso un comando erroneo');

}
