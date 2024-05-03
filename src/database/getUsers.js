'use server'
import pool from '@/utils/postgres'
// import { sql } from '@vercel/postgres'

// const getUsers = async () => {
//   const { rows } = await sql`SELECT * FROM usuarios`
//   return rows
// }
const getUsers = async () => {
  const res = await pool.query('SELECT * FROM usuarios')
  return res.rows
}
export default getUsers
