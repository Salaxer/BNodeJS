const fs = require('fs');
// Para leer mis archivos en txt o cualquier otra extencion de texto
const read = (route, cb) =>{
    fs.readFile(route, (error, data) =>{
        console.log(data.toString());
    })
}
// Escribir en mi archivo txt o en cualquier otra extencion de texto
const write = (route, content, cb) =>{
    fs.writeFile(route, content, (error, data) =>{
        error ? console.log(`No se pudo escribir por ${error}`) : console.log('Se escribio correctamente');  
    })
}
// borrar cualquier archivo de texto
const deleted = (route, cb) =>{
    fs.unlink(route, (error) =>{
        error ? cb(`No se pudo borrar por ${error.message}`) : cb('Se borro correctamente');  
    })
}

// write(`${__dirname}/archivo1.txt`, 'Hola que pasa chavales')

// read(`${__dirname}/archivo.txt`)

deleted(`${__dirname}/archivo1.txt`, console.log)