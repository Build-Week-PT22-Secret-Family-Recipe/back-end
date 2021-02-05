const express = require("express");
const Recipe = require("../recipe/model");
const { restricted } = require("../user/middleware");

const router = express.Router();

router.get("/", restricted(), async (req, res) => {
    try {
        const recipe = await Recipe.getRecipes();
        res.json(recipe)
    } catch (err) {
       
    }
})

router.get("/:id", restricted(), async (req, res, next) => {
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

router.get("/:id/instructions", restricted(), async (req, res, next) => {
    try {
        const instruction = await Recipe.getInstructions(req.params.id)
        res.json(instruction)
    } catch (err) {
        next(err);
    }
})

router.post("/", restricted(), async (req, res, next) => {
    try {
        const newOne = req.body;
        const newRecipe = await Recipe.addRecipe(newOne)
      res.status(210).json(newRecipe);
    } catch (err) {
        next(err);
    }
})

router.put("/:id", restricted(), async (req, res, next) => {
    try {
        const [id] = req.params.id
        const changes = req.body;
        Recipe.getRecipeById(id);
        const edited = Recipe.editRecipe(changes, id)
        res.json(edited);

    } catch (err) {
        next(err);
    }
})

router.delete("/:id", restricted(), async (req, res, next) => {
    try {
        const { id } = req.params
        const deleted = await Recipe.removeRecipe(id)
        res.json({ removed: deleted })
    } catch (err) {
        next(err);
    }
   
    
})

module.exports = router;