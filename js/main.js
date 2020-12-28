import { suma } from './components/suma.js';
import { atimtis } from './components/atimtis.js';
import { daugyba } from './components/daugyba.js';
import { dalyba } from './components/dalyba.js';
import { vidurkis } from './components/vidurkis.js';

// In JavaScript ES6, you can import and export functionalities from modules.. These can be functions, classes, components or constants - essentially anything you can assign to a JavaScript variable.

const ats1 = suma(5, 8);
console.log(ats1);

const ats2 = atimtis(5, 8);
console.log(ats2);

const ats3 = daugyba(5, 8);
console.log(ats3);

const ats4 = dalyba(5, 8);
console.log(ats4);

const ats5 = vidurkis([10, 2, 8, 4]);
console.log(ats5);