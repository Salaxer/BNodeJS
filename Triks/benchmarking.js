
console.time('mainLoop');
    let sum = 0;
    console.time('Loop1');
        for (let i = 0; i < 10000000; i++) {
            sum++;
        }
    console.timeEnd('Loop1');
    sum = 0;
    console.time('Loop2');
        for (let i = 0; i < 10000000; i++) {
            sum = i;
        }
    console.timeEnd('Loop2');
console.timeEnd('mainLoop');

console.log('Comienza proceso');
console.time('asyncs');
const async = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log('End process async');
            resolve()
        },5000)
    })
}
async()
.then(()=>{
    console.timeEnd('asyncs');
})
