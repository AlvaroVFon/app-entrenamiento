'use server'
import { sql } from '@vercel/postgres'
import { v4 as uuid } from 'uuid'
import { redirect } from 'next/navigation'

const signup = async (formdata) => {
  const nombre = formdata.get('nombre')
  const email = formdata.get('email')
  const password = formdata.get('password')
  const userid = uuid()

  const rows =
    await sql`INSERT INTO usuarios (userid,nombre, email, password,rol) VALUES (${userid},${nombre}, ${email}, ${password}, 'user')`
      .then(() => {
        redirect('/login')
      })
      .catch((error) => error)
  return rows
}
export { signup }
