const router = require("express").Router();
// const { db } = require("../models/Workout.js");
const Workout = require("../models/Workout.js");




router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
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

    Workout.findOneAndUpdate( id , {$push:{ exercises: body }}, {new: true})
    .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate( [
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" } ,
        
      }
    },
   
 ] ).sort({_id: -1}).limit(7)
    .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})






module.exports = router;