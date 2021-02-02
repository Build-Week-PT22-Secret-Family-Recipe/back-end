const express = require("express");
const Ingredients = require("./model");
const { restricted } = require("../user/middleware");

const router = express.Router();

router.get("/", restricted(), async (req, res, next) => {
    try {
        const ingredients = await Ingredients.find()
        res.json(ingredients)
    } catch (err) {
        next(err);
    }
})

router.get("/:id", restricted(), async (req, res, next) => {
    try {
        const ingredients = await Ingredients.findById(req.params.id)
        if (!ingredients) {
            return res.status(404).json({
                Message: "Ingredients not found",
            })
        }
        res.json(ingredients)
    } catch (err) {
        next(err);
    }
})

router.post("/", restricted(), async (req, res, next) => {
    try {
        const newOne = req.body;
        const newIngredient = await Ingredients.addIngredients(newOne)
        res.status(201).json(newIngredient)
    } catch (err) {
        next(err);
    }
})

router.put("/:id", restricted(), async (req, res, next) => {
    try {
        const [id] = req.params.id
        const changes = req.body;

        Ingredients.findById(id);
        const edited = Ingredients.editIngredient(changes, id)
        res.json(edited);
    } catch (err) {
        next(err);
    }
})

router.delete("/:id", restricted(), async (req, res, next) => {
    try {
        const { id } = req.params
        const deleted = await Ingredients.removeIngredient(id)
        res.json({ removed: deleted });
    } catch (err) {
        next(err);
    }
})

module.exports = router;