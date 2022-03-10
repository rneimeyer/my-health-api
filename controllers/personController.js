//person controller
const express = require('express');
const router = express.Router();

//import model
const Person = require("./../models/Person")

//returns all users and their data
router.get("/", (req, res) => {
    Person.find({}).populate('activity').then((person) => {
        res.json({
            status: 200,
            person: person,
        });
    });
});

//returns a single user and their data
router.get("/:id", (req, res) => {
    Person.findById(req.params.id).populate('activity').then((person) => {
        res.json({
            status: 200,
            person: person,
        })
    })
})

//create new user
router.post("/", (req, res) => {
    const personData = req.body;
    Person.create(personData).then((person) => {
        res.json({
            status: 200,
            person: person,
        })
    })
})

//update user
router.put("/:id", (req, res) => {
    Person.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((person) => {
        res.json({
            status: 200,
            person: person,
        })
    })
})

//delete user- currently not being used, plan to add in future versions.
router.delete("/:id", (req, res) => {
    Person.findByIdAndDelete(req.params.id).then((person) => {
        res.json({
            status: 200,
            person: person,
        })
    })
})


module.exports = router;