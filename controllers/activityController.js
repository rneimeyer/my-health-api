// activity controller

const express = require("express");
const router = express.Router();

const Activity = require("./../models/Activity");

//index - returns all users and their data
router.get("/", (req, res) => {
  Activity.find({}).then((activity) => {
      res.json({
          status: 200,
          activity: activity,
      });
  });
});

router.get("/:id", (req, res) => {
  Activity.findById(req.params.id).then((activity) => {
      res.json({
          status: 200,
          activity: activity,
      });
  });
});

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
    res.json(`deleted ${activity.exercise}`)
  );
});

module.exports = router;
