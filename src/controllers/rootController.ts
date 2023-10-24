import { Request, Response } from 'express'
import * as govDataService from '../services/govDataService'

export default async function fetchDataForDashboard (req: Request, res: Response) {
  const allOrganizationsWithDatasetCount = await govDataService.getAllOrganizationsWithDatasetCount()
  res.render('index.ejs', { allOrganizationsWithDatasetCount })
}