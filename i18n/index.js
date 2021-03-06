require('fs')
    .readdirSync(__dirname)
    .filter(file => file !== 'index.js') //Ignores index.js
    .forEach(filename => {
        const translations = filename.split('.')[0];
        module.exports[translations] = require(`${__dirname}/${filename}`);
    });
