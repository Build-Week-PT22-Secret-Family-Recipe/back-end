const db = require("../../data/dbConfig");

function getIngredientsList(id) {
    return db("recipe_ingredients")
        .where("recipe_id", id)
        .innerJoin("recipes", "recipe_id", "recipes.id")
        .innerJoin("ingredients", "ingredients_id", "ingredients.id")
    .select("ingredients.name", "recipe_ingredients.quantity")
}

async function addIngredientsToRecipe(newItem) {
    const [id] = await db("recipe_ingredients")
        .insert(newItem)
        .into("recipe_ingredients")
        getIngredientsList(id)
}

module.exports = {
    getIngredientsList,
    addIngredientsToRecipe,
  
}