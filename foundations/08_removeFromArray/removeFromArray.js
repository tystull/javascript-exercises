const removeFromArray = function(array, itemToRemove) {

   // If item equals one of the item arguments, remove it
   // must remove 3, 2 from 1 3 4
    for (let i = 0; i < array.length; i++) {
        console.log('before: ' + array);
        for (let j = 1; j < arguments.length; j ++) {
            if (array[i] === arguments[j]) {
                console.log('removed: ' + arguments[j]);
                array.splice(i, 1);
                console.log('after: ' + array);
                // Must subtract i for count to remain accuratebecause item being removed
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
