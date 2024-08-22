// Recipe Book using ES6+ features
const combineIngredients = (ingredient1, ingredient2, ...rest) => {
  console.log(`Mixing ${ingredient1} and ${ingredient2} with additional ingredients: ${rest.join(', ')}`);
  // The rest.join(', ') operation creates a string from the elements of the array rest by concatenating them with a given separator ', '
};

const [mainIngredient, secondaryIngredient, ...additionalIngredients] = ['flour', 'water', 'salt', 'yeast'];
combineIngredients(mainIngredient, secondaryIngredient, ...additionalIngredients);
