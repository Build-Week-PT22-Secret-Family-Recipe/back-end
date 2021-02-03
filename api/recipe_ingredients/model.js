const db = require("../../data/dbConfig");

function getIngredientsList(id) {
    return db("recipe_ingredients")
        .where("recipe_id", id)
        .innerJoin("recipes", "recipe_id", "recipes.id")
        .innerJoin("ingredients", "ingredients_id", "ingredients.id")
    .select("ingredients.name", "recipe_ingredients.quantity")
}

function addIngredientsToRecipe(newItem) {
    return db("recipe_ingredients")
        .insert(newItem)
        .into("recipe_ingredients")
        .returning("*");
        getIngredientsList(id)
}

module.exports = {
    getIngredientsList,
    addIngredientsToRecipe,
  
}