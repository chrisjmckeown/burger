const express = require('express');
const burger = require('../models/burger.js');
const moment = require('moment');

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        return res.render("index", hbsObject);
    });
});

// get a s
router.get("/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    if (req.params.id === "favicon.ico") {
        console.log(req.params.id);
        return;
    }
    burger.selectOne(condition, (data) => {
        return res.render("update-burger", data[0]);
    });
});

// create a new burger
router.post("/api/burgers", (req, res) => {
    const date = moment().format("yyyy-MM-DD h:mm:ss");
    burger.insertOne([
        "burger_name", "devoured", "date_devoured"
    ], [
        req.body.burger_name, req.body.devoured, date
    ], (result) => {
        // Send back the ID of the new quote
        return res.json({ id: result.insertId });
    });
});

// updates a burget to be devoured and set the devoured date
router.put("/api/burgers/devoured/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    const date = moment().format("yyyy-MM-DD h:mm:ss");
    burger.updateOne({ devoured: req.body.devoured, date_devoured: date },
        condition, (result) => {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                return res.status(200).end();
            }
        });
});

// updates the burger name is inputted incorrect first time
router.put("/api/burgers/namechange/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    burger.updateOne({ burger_name: req.body.burger_name },
        condition, (result) => {
            if (result.affectedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                return res.status(200).end();
            }
        });
});

// delete all burgers to start again
router.delete("/api/burgers/deleteall", (req, res) => {
    burger.deleteall((result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        }
    });
});

// delete a specific burger
router.delete("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;