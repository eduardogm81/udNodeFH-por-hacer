const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = (  ) => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, ( err ) => {
        if (err) throw new Error('No se pudo grabar', err);
        // console.log('Se ha guardado la información en el archivo data.json');
    });
};

const cargarDb = (  ) => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const buscaTarea = ( descripcion ) => {
    return listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
};

const crear = ( descripcion ) => {

    cargarDb();
    
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
};

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
};

const actualizar = ( descripcion, completado = true ) => {

    cargarDb();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;

};

const borrar = ( descripcion ) => {
    cargarDb();

    /*let index = buscaTarea(descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }
    return false;
    */
    // Otra forma
    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    }
    listadoPorHacer = nuevoListado;
    guardarDB();
    return true;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};
