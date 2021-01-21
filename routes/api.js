const router = require("express").Router();
const Workout = require("../models/Workout.js");




router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(data => {
        console.log(data)
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



router.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body

    Workout.findOneAndUpdate({ id }, {$push:{ exercises: body }})
    .then(data => {
        console.log(data)
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(data => {
        console.log(data)
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.put('/api/workouts/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
  
    db.Workout.findOneAndUpdate(
      { id },
      { $push: { exercises: body } },
      { new: true },
    )
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });




module.exports = router;