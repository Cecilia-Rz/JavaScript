const mixIngredients = ({flour, sugar, eggs}) => {return `Mix ${flour}, ${sugar} and ${eggs} eggs to make a mixture.`};
const ingredients = { flour: '1 cup', sugar: '1/2 cup', eggs: 2 };
// Incorrectly using parameters instead of destructuring
// The function call is not passing the ingredients as separate arguments when it should be destructuring an object
const recipeMessage = mixIngredients(ingredients);
console.log(recipeMessage); // Output is not as expected due to a code bug
