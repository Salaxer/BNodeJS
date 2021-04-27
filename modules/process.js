
process.on('beforeExit', () =>{
    console.log('Ya casi acaba, cuidao');
})

process.on('exit', () =>{
    console.log('Su Ma. se ha acabado');
})

process.on('uncaughtException', (err, origin) =>{
    console.log('Pues valemos nada');
    console.error(err);
})

MediaDeviceo()