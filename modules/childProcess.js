const { exec, spawn } =  require('child_process');

// Podemos ejecutar comandos nuevos con node, este caso son solo exec
// exec('ls -la', (err, stdout, sterr)=>{
//     if(err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

let process = spawn('ls',['-la']);
// console.log(process.connected);

process.stdout.on('data', (data) =>{
    console.log(data.toString());
})

process.on('exit', () =>{
    console.log('El proceso termino');
})