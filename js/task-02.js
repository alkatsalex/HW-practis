const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredientsItem = document.querySelector('#ingredients')



const listIngredients = ingredients.map(ingredient =>{
  let list =  document.createElement('li')
  list.classList.add('item')
  list.textContent = ingredient
console.log(list);
return list
})

listIngredientsItem.append(...listIngredients)
