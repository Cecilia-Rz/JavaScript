// Define a recipe using an arrow function with destructuring and template strings
const recipeMessage = ({name, servings, ingredient1, ingredient2, ingredient3}) => {
  return `To make ${servings} servings of ${name}, you will need ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
};

// Use the arrow function and spread operator to add a twist
const basicRecipe = {name: 'Peanut Butter Cookies', servings: 4, ingredient1: 'peanut butter', ingredient2: 'sugar'};
const twistRecipe = {...basicRecipe, ingredient3: 'honey'};
console.log(recipeMessage(twistRecipe)); // Should print the recipe with the twist ingredient
