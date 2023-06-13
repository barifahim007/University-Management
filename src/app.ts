import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/users/user.route'
import cors from 'cors'

const app: Application = express()
app.use(cors())
//parser data
app.use(express.json()) //hello sawa
app.use(express.urlencoded({ extended: true }))
// appi router
app.use('/api/v1/users', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('underWorld workng successfully')
})

export default app
