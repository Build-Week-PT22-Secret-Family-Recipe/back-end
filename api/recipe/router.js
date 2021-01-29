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

router.post("/", async (req, res, next) => {
    try {
        const newOne = req.body;
        const newRecipe = await Recipe.addRecipe(newOne)
      res.status(210).json(newRecipe);
    } catch (err) {
        next(err);
    }
})

// need clarification
router.put("/:id", async (req, res, next) => {
    try {
        const {id} = req.params.id;
        const changes = req.body;
        Recipe.getRecipeById(id);
        const edited = Recipe.editRecipe(changes, id)
        res.json(edited);

    } catch (err) {
        next(err);
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const deleted = await Recipe.removeRecipe(id)
        res.json({ removed: deleted })
    } catch (err) {
        next(err);
    }
   
    
})

module.exports = router;