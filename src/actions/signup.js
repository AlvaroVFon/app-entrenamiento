'use server'
import { v4 as uuid } from 'uuid'
import pool from '@/utils/postgres'
import { redirect } from 'next/navigation'

const signup = async (formdata) => {
  const nombre = formdata.get('nombre')
  const email = formdata.get('email')
  const password = formdata.get('password')
  const userid = uuid()

  const { rows } = await pool
    .query(
      'INSERT INTO usuarios (userid,nombre, email, password,rol) VALUES ($1,$2,$3,$4,$5)',
      [userid, nombre, email, password, 'user']
    )
    .catch((error) => error)
  redirect('/')
}
export { signup }
