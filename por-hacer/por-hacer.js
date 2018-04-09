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

module.exports = {
    crear,
    getListado
};
