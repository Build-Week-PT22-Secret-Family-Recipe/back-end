const express = require("express");
const Recipe = require("../recipe/model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const recipe = await Recipe.getRecipes();
        console.log(Recipe);
        res.json(recipe)
    } catch (err) {
        next(err);
    }
})

router.get("/:id", async (req, res, next) => {
    console.log(req)
    try {
        const recipe = await Recipe.getRecipeById(req.params.id)
        if (!recipe) {
            return res.status(404).json({
                Message: "Recipe not found",
            })
        }
        res.json(recipe);
    } catch (err) {
        next(err)
    }
})

router.get("/:id/instructions", async (req, res, next) => {
    try {
        const instruction = await Recipe.getInstructions(req.params.id)
        res.json(instruction)
    } catch (err) {
        next(err);
    }
})

module.exports = router;