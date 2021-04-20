// solo para decir algo
console.log('Hola');
// Al igual que log, solo sirve para informar de algo
console.info('Hola');
// Lanza un error, la mayoria de las consolas lo detectan y te lo marcan
console.error('Hola');
// este lanza un advertencia para que se revise y no cause un futuro error
console.warn('Hola');

// tiene la capasidad de armar una tabla partiendo de un arrar
let table = [
    {
        a: '1',
        b: '2'
    },
    {
        c: '3',
        d: '4'
    }
]
console.table(table);
// con console. group lo que hace es agrupar e identar las consoles.log
// de esta manera hace que podamos mostrar en consola con mas claridad al usuario
console.group('Conversacion: ');
console.log('Hola');
console.log('blablablablabla');
console.log('Bay');
console.groupEnd('Conversacion: ');
console.log('funcion funcionos');

// aqui cuanta por cada console.count
console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
