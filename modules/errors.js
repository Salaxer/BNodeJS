const anotherFunction = () =>{
    return Breaks();
}

const Breaks = () =>{
    return 3 + z;
}

const asyncBreak = () =>{
    return new Promise((resolve, reject) => {
        setTimeout( () =>{
            reject('Error malo')
        },1000)
    })
}

const main = async ()=>{
    console.log('Lo pongo al inicio');    
    try{
        await asyncBreak()
    }catch(err){
        console.log(`Vaya, algo se ha roto :( por ${err}`);
    }
    console.log('Lo pongo al final');
}

main()