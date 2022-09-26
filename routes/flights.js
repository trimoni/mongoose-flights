import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.get('/:id', flightsCtrl.show)

router.get('/:id/edit', flightsCtrl.edit)

router.post('/', flightsCtrl.create)

router.post('/:id/tickets', flightsCtrl.createTickets)

router.delete('/:id', flightsCtrl.delete)

router.delete('/:flightsId/tickets/:ticketsId', flightsCtrl.deleteTickets)

router.put('/:id', flightsCtrl.update)

export {
  router
}
