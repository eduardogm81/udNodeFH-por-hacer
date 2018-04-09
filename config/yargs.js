/**
 * Comando crear 'Crear un elmento por hacer'
 *         --descripcion / -d
 * Comando actualizar 'Actualiza el estado completado de una tarea'
 *         --descripcion / -d
 *         --completado / -c --> default: true
 * --help
 */
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elmento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
};
