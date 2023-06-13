import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utls'

const createdUser = async (user: IUser): Promise<IUser | null> => {
  // autogenerate incremental id
  const id = await generateUserId()

  user.id = id

  //default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user')
  }
  return createUser
}

export default {
  createdUser,
}
