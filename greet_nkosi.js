import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgYellow.black(greet('Nkosi'));
console.log(styledMessage)
console.log(greet('nkosi'))

import figlet from 'figlet';


figlet(greet('nkosi'), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});