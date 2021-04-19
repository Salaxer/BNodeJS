const Hi = (Name, MyCallback) => {
    setTimeout(() =>{
        console.log(`Hi ${Name}`);
        MyCallback();   
    },1000)
}

const Speak = (SpeakCallback) =>{
    setTimeout( () =>{
        console.log('Hola bienvenido a mi mundo');
        SpeakCallback();
    },1000);
}

const Bye = (nombre, AnotherCallback) =>{
    setTimeout( () =>{
        console.log(`Bye ${nombre}`);
        AnotherCallback();
    },1000)
}

console.log('init process');
const MyName = 'Salaxer';

const conversation = (MyName, times, callback) => {
    times>0 ? Speak(()=>{conversation(MyName, --times, callback); }) :
    Bye(MyName, callback)
}
Hi(MyName, () =>{
    conversation(MyName, 3, ()=>{
        console.log('proceso terminado');
    })
})

// Hi( MyName, () =>{
//     Speak(() =>{
//         Speak(() =>{
//             Speak(() =>{
//                 Speak(() =>{
//                     Bye(MyName, ()=> {
//                         console.log('end process');
//                     });
//                 });
//             });
//         });
//     });
// });
