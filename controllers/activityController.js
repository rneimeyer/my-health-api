// activity controller

const express = require("express");
const router = express.Router();

const Activity = require("./../models/Activity");

//returns single activity by id
router.get("/:id", (req, res) => {
  Activity.findById(req.params.id).then((activity) => {
      res.json({
          status: 200,
          activity: activity,
      });
  });
});

//creates a new activity
router.post("/", (req, res) => {
  Activity.create(req.body).then((activity) =>
    res.json({
      status: 200,
      activity: activity,
    })
  );
});

//updates an activity
router.put("/:id", (req, res) => {
  Activity.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (activity) => {
      res.json({
        status: 200,
        activity: activity,
      });
    }
  );
});

//deletes an activity
router.delete("/:id", (req, res) => {
  Activity.findByIdAndDelete(req.params.id).then(() =>
    res.json(`deleted`)
  );
});

//returns all activities- currently not being used, plan to add in future versions.
router.get("/", (req, res) => {
  Activity.find({}).then((activity) => {
      res.json({
          status: 200,
          activity: activity,
      });
  });
});

module.exports = router;
