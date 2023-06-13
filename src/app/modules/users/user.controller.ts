import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const resutl = await userService.createdUser(user)
    res.status(200).json({
      success: true,
      message: 'successfully created user',
      data: resutl,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'faild to create user',
    })
  }
}

export default {
  createUser,
}
