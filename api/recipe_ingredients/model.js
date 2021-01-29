const db = require("../../data/dbConfig");

function getIngredientsList(id) {
    return db("recipe_ingredients")
        .where("recipe_id", id)
        .innerJoin("recipes", "recipe_id", "recipes.id")
        .innerJoin("ingredients", "ingredients_id", "ingredients.id")
    .select("ingredients.name")
}



module.exports = {
    getIngredientsList,
  
}