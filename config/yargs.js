/**
 * Comando crear 'Crear un elmento por hacer'
 *         --descripcion / -d
 * Comando actualizar 'Actualiza el estado completado de una tarea'
 *         --descripcion / -d
 *         --completado / -c --> default: true
 * --help
 */
const argv = require('yargs')
    .command('crear', 'Crear un elmento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completada o pendiente la tarea'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
};
