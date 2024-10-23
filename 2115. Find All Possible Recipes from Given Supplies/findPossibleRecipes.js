var findAllRecipes = function (recipes, ingredients, supplies) {
  let adjacencyList = new Map()
  let indegree = new Map()
  let queue = [...supplies]
  let retval = []

  for (let i = 0; i < ingredients.length; i++) {
    for (ingredient of ingredients[i]) {
      if (!adjacencyList.has(ingredient)) adjacencyList.set(ingredient, [])

      adjacencyList.get(ingredient).push(recipes[i])
    }
    if (!indegree.has(recipes[i])) indegree.set(recipes[i], ingredients[i].length)
  }

  while (queue.length > 0) {
    const suppliedIngredient = queue.shift()

    const recipesUsingSuppliedIngredient = adjacencyList.get(suppliedIngredient) || []

    recipesUsingSuppliedIngredient.forEach(recipe => {
      indegree.set(recipe, (indegree.get(recipe) || 0) - 1)

      if (indegree.get(recipe) === 0) {
        queue.push(recipe)
        retval.push(recipe)
      }
    })
  }

  return retval
};