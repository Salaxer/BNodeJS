// const imAsync = (MyCallback) =>{
//     setTimeout(() =>{
//         console.log('Hi! im async function');
//         MyCallback();   
//     },1000)
// }

// console.log('init process');
// imAsync(() =>{
//     console.log('end process');
// });

const Hi = (Name, MyCallback) => {
    setTimeout(() =>{
        console.log(`Hi ${Name}`);
        MyCallback();   
    },1000)
}
const Bye = (nombre, AnotherCallback) =>{
    setTimeout( () =>{
        console.log(`Bye ${nombre}`);
        AnotherCallback();
    },1000)
}

console.log('init process');
const MyName = 'Salaxer';

Hi( MyName, () =>{
    Bye(MyName, ()=> {
        console.log('end process');
    });
});
