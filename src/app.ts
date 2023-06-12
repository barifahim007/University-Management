import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()
app.use(cors())
//parser data
app.use(express.json()) //hello sawa
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('underWorld workng successfully')
})

export default app
