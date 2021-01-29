const db = require("../../data/dbConfig");

function getRecipes() {
    return db("recipes");
}

function getRecipeById(id) {
    return db("recipes")
        .where("recipes.id", id)
}

function getInstructions(recipe_id) {
    return db("recipes")
        .where("recipes.id", recipe_id)
    .select("recipes.id", "recipes.category", "recipes.name", "recipes.instruction")
}

module.exports = {
    getRecipes,
    getRecipeById,
    getInstructions,
}