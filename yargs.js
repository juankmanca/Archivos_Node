const id = {
    demand: true,
    alias: 'c'
}

const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const creacion = {
    id,
    nombre,
    matematicas,
    ingles,
    programacion
}

const busqueda = {
    id
}

const argv = require('yargs')
            .command ('crear','Crear un estudiante',creacion)
            .command('mostrar','Listar los estudiantes')
            .command('buscar','Buscar un estudiante',busqueda)
            .command('mostrarMateria','Mostrar los estudian')
            .command('promedio','Muestra el promedio de un estudiante',busqueda)
            .command('mejorPromedio','Muestra los estudiantes con mejor promedio')
            .argv;

module.exports = {
    argv
};