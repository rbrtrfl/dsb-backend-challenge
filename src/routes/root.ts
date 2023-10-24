import { Router, Request, Response } from 'express'
import fetchDataForDashboard from '../controllers/rootController'

const app = Router()

app.get('/', async function (req: Request, res: Response) {
  await fetchDataForDashboard(req, res)
})

module.exports = app