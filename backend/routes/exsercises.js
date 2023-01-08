const router = require('express').Router()

let Exsercise = require('../models/exsercise.model')

router.route('/').get((req, res) => {
    Exsercise.find()
        .then(Exsercises => res.json(Exsercises))
        .catch(err => res.status(400).json('Error:' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exsercise({ username, description, duration, date })

    newExercise.save().then(() => res.json("Exsercise added!"))
        .catch(err => res.status(400).json('Error:' + err))

})

router.route('/:id').get((req, res) => {
    Exsercise.findById(req.params.id)
        .then(exsercise => res.json(exsercise))
        .catch(err => res.status(400).json('Error:' + err))
})

router.route('/:id').delete((req, res) => {
    Exsercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exsercise deleted'))
        .catch(err => res.status(400).json('Error:' + err))
})

router.route('/update/:id').post((req, res) => {
    Exsercise.findById(req.params.id)
        .then((exsercise) => {
                exsercise.username = req.body.username,
                exsercise.description = req.body.description,
                exsercise.duration = Number(req.body.duration),
                exsercise.date = Date.parse(req.body.date)

                exsercise.save()
                .then(() => res.json('Exsercise updated!'))
                .catch(err => res.status(400).json('Error:' + err))

        }
        )
        .catch(err => res.status(400).json('Error:' + err))
})


module.exports = router