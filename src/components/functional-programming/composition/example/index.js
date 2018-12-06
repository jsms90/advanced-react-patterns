export const compose = (...functions) => initialValue =>
functions.reduceRight((currentValue, fn) => fn(currentValue), initialValue);
// student asks whether this is the wrong way round

const toUpperCase = text => text.toUpperCase();

const removeSpaces = text => text.replace(/\s/g, "");

const removeNumbers = text => text.replace(/[0-9]/g, "");

export const transformText = compose(
  toUpperCase,
  removeNumbers,
  removeSpaces
);

// This line was originally not commented out
// export const transformText = text => text;



/*

Showing students how to get here:

const exampleText = "1 2 3 ReactJS Academy is a m a z i n g" 

// Start with:

const myTransformer = toUpperCase(exampleText)
const myTransformer2 = removeSpaces(myTransformer)
const myTransformer3 = removeNumberrs(myTransformer2)


// Refine:

const answer = removeNumberrs(removeSpaces(toUpperCase(exampleText)))


// Create compose function that takes in a set of functions and calls them one after another

const compose = (...functions) => initialValue => {
  functions.reduce((accumulator, currentValue) => {
    currentValue(accumulator)       // He wrote something like this. I didn't copy in time
  }, initialValue)
}

const compose = (...functions) => initialValue =>
  functions.reduceRight((currentValue, fn) => fn(currentValue), initialValue);

const transformText = compose(
    toUpperCase,
    removeNumbers,
    removeSpaces
  );
  
*/