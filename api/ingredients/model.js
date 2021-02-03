const { update } = require("../../data/dbConfig");
const db = require("../../data/dbConfig");

function find() {
    return db("ingredients");
}

function findById(id) {
    return db("ingredients")
        .where("id", id)
        .first();
}

function addIngredients(newIngredients) {
    return db("ingredients")
        .insert(newIngredients)
        .into("ingredients")
        .returning("*");
    // return findById(id);
}

async function editIngredient(change, ingredients_id) {
    const [id] = await db("ingredients")
        .where("id", ingredients_id)
        .update(change)
    return findById(id);
}

function removeIngredient(id) {
    return db("ingredients")
        .where("id", id)
        .del();
}

module.exports = {
    find,
    findById,
    addIngredients,
    removeIngredient,
    editIngredient,
}