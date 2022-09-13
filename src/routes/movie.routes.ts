import { Router } from 'express'
import MovieController from '../controllers/MovieController'

const router = Router()
const movieController = new MovieController()

router.post('/movies', movieController.create)
router.get('/movies', movieController.list)

export default router