// Saturday To Do list
//8am: walk dog
//12pm: Lunch
//3pm: Study

//Create new Map() and add each item as key-value pair.
//using the set method to build the Map
const saturday = new Map();
//int is 24hr time
saturday.set(8, 'walk dog');
saturday.set(12, 'lunch');
saturday.set(15, 'study');

// ------   run node in terminal to log out results -----


// --  GET method
const noon = saturday.get(12);
console.log('what is happening at 12', noon);
// undefined result
const nine = saturday.get(9);
console.log('what is happening at 9', nine);


// --  HAS method will return a boolean
const hasFour = saturday.has(4);
console.log('does the map has four', hasFour);

const hasEight = saturday.has(8);
console.log('does the map have eight', hasEight);


// --  Map() ->SIZE method
const saturdaySize = saturday.size;
console.log(`My map contains ${saturdaySize} elements`);


// --  Delete and Clear methods
console.log('did the key-value pair delete? - 1500/3pm', saturday.delete(15) );

console.log('did the key-value pair delete? - 10', saturday.delete(10) );

// - clearing the saturday object
//saturday.clear();
//console.log('map size', saturday.size);


// --  Keys and values methods
// what is the first key in saturday map?
const saturdayKeys = saturday.keys();//saturday map iterator
const firstKey = saturdayKeys.next().value;
console.log(`the first key in saturday map is ${firstKey}`);

// what is the second value in the saturday map?
const saturdayValues = saturday.values();//saturday map iterator
saturdayValues.next();
const secondValue = saturdayValues.next().value;
console.log(`the second value in saturday map is ${secondValue}`);


// --  Entries method
//what is the third set of entries?
const saturdayEntries = saturday.entries();
saturdayEntries.next();//getting first entry
saturdayEntries.next();// " second entry

const thirdEntry = saturdayEntries.next().value;
console.log(`what is the third entry? -- ${thirdEntry}`);


// -- FOR EACH METHOD
saturday.forEach((value, key) => {
    if (key === 12) {
        console.log(`its time for ${value}`);
    }
});
