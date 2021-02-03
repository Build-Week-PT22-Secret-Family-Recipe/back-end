const db = require("../../data/dbConfig");

function getRecipes() {
    return db("recipes")
    .select("recipes.id", "recipes.name")    
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

function addRecipe(newRecipe) {
    return db("recipes")
        .insert(newRecipe)
        .into("recipes")
        .select("*");
        // return getRecipeById(id)
}

async function editRecipe(change, recipe_id) {
    const [id] = await db("recipes")
        .where("id", recipe_id)
        .update(change)
  return getRecipeById(id)  
}

function removeRecipe(id) {
    return db("recipes")
        .where("id", id)
        .del()
}

module.exports = {
    getRecipes,
    getRecipeById,
    getInstructions,
    addRecipe,
    editRecipe,
    removeRecipe,
}