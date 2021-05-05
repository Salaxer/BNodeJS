const puppeteer = require('puppeteer');


(async ()=>{
    console.log('Lanzamos el navegador');
    const browser = await puppeteer.launch({
        headless: false
    })
    // Crea nueva pagina
    const page = await browser.newPage();
    // te redireccion a otra pagina
    await page.goto('https://es.wikipedia.org/wiki/Node.js');
    // Ejecuta el escrip de la pagina
    var titulo1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        console.log(h1);
        return h1.innerHTML
    })
    // Me regresa lo que retorne de la pagina
    console.log(titulo1);
    console.log('Cerramos el navegador...');
    browser.close();
    console.log('Navegador cerrado');
})();