const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", (req, res) => {
    burger.all((result) => {
        const hbsObject = {
            burgers: result
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    
    burger.update({ devoured: req.body.devoured },
        condition, (result) => {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

router.delete("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;