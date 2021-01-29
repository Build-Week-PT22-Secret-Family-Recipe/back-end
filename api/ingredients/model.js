const db = require("../../data/dbConfig");

function find() {
    return db("ingredients");
}

function findById(id) {
    return db("ingredients")
        .where("id", id)
        .first();
}

async function addIngredients(newIngredients) {
    const [id] = await db("ingredients")
        .insert(newIngredients)
        .into("ingredients")
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
}