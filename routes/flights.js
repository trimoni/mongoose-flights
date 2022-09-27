import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.get('/:id', flightsCtrl.show)

router.get('/:id/edit', flightsCtrl.edit)

router.post('/', flightsCtrl.create)

router.post('/:id/tickets', flightsCtrl.createTickets)

router.post('/:id/meals', flightsCtrl.addToMeal)

router.delete('/:id', flightsCtrl.delete)

router.delete('/:id/tickets/:ticketId', flightsCtrl.deleteTicket)

router.put('/:id', flightsCtrl.update)

export {
  router
}
