'use server'
import pool from '@/utils/postgres'
// import { sql } from '@vercel/postgres'

// const getUserByEmail = async (userEmail) => {
//   const { rows } = await sql`SELECT * FROM usuarios WHERE email = ${userEmail}`
//   return rows
// }
const getUserByEmail = async (userEmail) => {
  const { rows } = await pool.query('SELECT * FROM usuarios WHERE email = $1', [
    userEmail,
  ])
  return rows
}
export { getUserByEmail }
