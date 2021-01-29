const express = require("express");
const { route } = require("../user/router");
const Ingredients = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const ingredients = await Ingredients.find()
        res.json(ingredients)
    } catch (err) {
        next(err);
    }
})

router.get("/:id", async (req, res, next) => {
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

module.exports = router;