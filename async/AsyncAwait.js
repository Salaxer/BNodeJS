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
            resolve();
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

const MyName = 'Salaxer';

const main = async (MyName)=>{
    await Hi(MyName);
    await Speak(MyName);
    await Speak(MyName);
    await Speak(MyName);
    await Speak(MyName);
    await Bye(MyName);
}

console.log('init process');
main(MyName)