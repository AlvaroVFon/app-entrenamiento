'use server'
import { getUserByEmail } from '@/database/getUserByEmail'
const handleLogin = async (formdata) => {
  const email = formdata.get('email')
  const password = formdata.get('password')
  const user = await getUserByEmail(email)
  if (user.length === 0) {
    return null
  }
  const foundUser = user[0]

  if (user[0].password === password) {
    console.log(foundUser)
    return foundUser
  } else {
    return null
  }
}
export { handleLogin }
