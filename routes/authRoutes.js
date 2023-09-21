const {Router} = require('express')

const authController = require('../controllers/authController')

const router = Router()

router.get('/tareas', authController.getTask)

router.post('/tareas', authController.saveTask)

router.get('/tareas/:id', authController.getTaskById)

router.put('/tareas/:id', authController.putTaskById)

router.delete('/tareas/:id', authController.deleteTaskById)


module.exports = router