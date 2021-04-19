const Hi = (Name) => {
    return new Promise((result, reject) =>{
        setTimeout(() =>{
            console.log(`Hi ${Name}`);
            result(Name);   
        },1000)
    })
}

const Speak = (MyName) =>{
    return new Promise((resolve, reject)=>{
        setTimeout( () =>{
            console.log('Hola bienvenido a mi mundo');
            reject();
        },1000);
    })
}

const Bye = (nombre) =>{
    return new Promise((resolve, reject) => {
        setTimeout( () =>{
            console.log(`Bye ${nombre}`);
            resolve(nombre);
        },1000)
    })
}

console.log('init process');
const MyName = 'Salaxer';

Hi(MyName)
.then(Speak)
.then(Speak)
.then(Speak)
.then(Speak)
.then(Bye)
.then((MyName) =>{
    console.log('End Process');
})
.catch(error=>{
    console.log('Hay un error');
})