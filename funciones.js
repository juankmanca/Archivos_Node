const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let est = {
        id: estudiante.id,
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado = listaEstudiantes.find(cedula => cedula.id == est.id);
    if(!duplicado){
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    }else{
        console.log('ya existe un usuario con ese id');
    }
} 

const listar = () => {
    try{
        listaEstudiantes = require('./listado.json');
    }catch(error){
        listaEstudiantes = [];
    }
    //si el listado va a ser de modo asincronico:
    //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json')); 
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json',datos,(err) =>{
        if(err) throw(err);
        console.log('archivo creado con exito');
    });
}

const mostrar = () => {
    listar();
    console.log('notas de los estudiantes: ');
    listaEstudiantes.forEach(estudiante => {
        console.log('id:',estudiante.id);
        console.log('nombre:',estudiante.nombre);
        console.log('notas:');
        console.log('matematicas:',estudiante.matematicas);
        console.log('programacion:',estudiante.programacion);
        console.log('ingles:',estudiante.ingles,'\n');
    });
}

const mostrarEstudiante = (id) =>{
    listar();
    let estudiante = listaEstudiantes.find(cedula => cedula.id == id);
    if(!estudiante){
        console.log('el estudiante con ese id no existe');
    }else{
        console.log('el estudiante es:');
        //listaEstudiantes.forEach(estudiante => {
          //  if(estudiante.id == id){
                console.log('id:',estudiante.id);
                console.log('nombre:',estudiante.nombre);
                console.log('notas:');
                console.log('matematicas:',estudiante.matematicas);
                console.log('programacion:',estudiante.programacion);
                console.log('ingles:',estudiante.ingles,'\n');
         //   }     
       // });
    }
}
    
mostrarMateria = () => {
    listar();
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
    if(ganan.length == 0){
        console.log('ningun estudiante va ganando');
    }else{
        console.log('los estudiantes que van ganando matematicas: ');
        ganan.forEach(estudiante => {
        console.log('id:',estudiante.id);
        console.log('nombre:',estudiante.nombre);
        console.log('notas:');
        console.log('matematicas:',estudiante.matematicas);
    });
    }
}

promedio = (id) => {
    listar();
    let estudiante = listaEstudiantes.find(cedula => cedula.id == id);
    if(!estudiante){
        console.log('el estudiante con ese id no existe');
    }else{
        let prom = (estudiante.matematicas + estudiante.ingles + estudiante.programacion)/3;
        console.log('el estudiante promedio del estudiante es: ' + prom);
    }
}

mejorPromedio = () => {
    listar();
    let ganan = listaEstudiantes.filter(mat => ((mat.matematicas + mat.ingles + mat.programacion)/3) >= 3);
    if(ganan.length == 0){
        console.log('ningun estudiante tiene un promedio mejor que 3.');
    }else{
        console.log('los estudiantes que lleva el promedio mayor a 3 son:');
        ganan.forEach(estudiante => {
        console.log('id:',estudiante.id);
        console.log('nombre:',estudiante.nombre);
        console.log('promedio:',(estudiante.matematicas + estudiante.ingles + estudiante.programacion)/3);
    });
    }

}

module.exports = {
    crear,
    mostrar,
    mostrarEstudiante,
    mostrarMateria,
    promedio,
    mejorPromedio
}