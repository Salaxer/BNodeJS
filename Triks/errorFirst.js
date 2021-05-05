const asyncr = (callback) =>{
    setTimeout(()=>{
        try{
            let a = 3 + f;
            callback(null, a);
        }catch(e){
            callback(e,null);
        }
    },1000)
}
asyncr((err, dato)=>{
    if (err) {
        console.log('We have a error');
        console.error(err);
        return false
    }
    console.log('Todo esta ok'); 
    console.log(dato);
})