const express = require('express');
const burger = require('../models/burger.js');
const moment = require('moment');

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((result) => {
        const hbsObject = {
            burgers: result
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    const date = moment().format("yyyy-MM-DD h:mm:ss");
    burger.insertOne([
        "burger_name", "devoured", "date_devoured"
    ], [
        req.body.burger_name, req.body.devoured, date 
    ], (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    const date = moment().format("yyyy-MM-DD h:mm:ss");
    burger.updateOne({ devoured: req.body.devoured, date_devoured: date },
        condition, (result) => {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

router.delete("/api/burgers/deleteall", (req, res) => {
    burger.deleteall((result) => {
        if (result.affectedRows == 0) {
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