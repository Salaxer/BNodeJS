const bcrypt = require('bcrypt');

const password = 'Mypassword';

bcrypt.hash(password, 6, (err, hash)=>{
    console.log(hash + ' ' + err);
    bcrypt.compare('Mypassword', hash, (err, res)=>{
        console.log(res);
    })
});