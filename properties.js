const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true
};

//getting the property names.
const keys = Object.keys(bottle);
console.log(keys);

//get all values.
const values = Object.values(bottle);
console.log(values);

// pairs property and value
const pairs = Object.entries(bottle);
console.log(pairs);

// blocking the object ,cause can't delete or add property only change property value.
Object.seal(bottle);

//freeze
Object.freeze(bottle);
bottle.price = 100;

// deleting the Object property
delete bottle.isClean;
console.log(bottle);

