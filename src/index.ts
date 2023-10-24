import express, { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import routes from './routes'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))

app.use(routes)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

export default app