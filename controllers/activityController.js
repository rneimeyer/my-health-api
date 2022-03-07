// activity controller

const express = require("express");
const router = express.Router();

const Activity = require("./../models/Activity");

// post - adds an activity
router.post("/", (req, res) => {
  Activity.create(req.body).then((activity) =>
    res.json({
      status: 200,
      activity: activity,
    })
  );
});

// put - updates an activity
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

// delete - deletes an activity
router.delete("/:id", (req, res) => {
  Activity.findByIdAndDelete(req.params.id).then((activity) =>
    res.json(`deleted ${activity.name}`)
  );
});

module.exports = router;
