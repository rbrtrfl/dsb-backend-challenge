import { Router } from 'express'
import loadAllExportsFromFolder from '../utils/folderExportsLoader'

const router = Router();

(async () => {
  const routes = await loadAllExportsFromFolder(__dirname)
  for (const route of routes) {
    if (route.default) {
      router.use(route.default)
    }
  }
})()

export default router
