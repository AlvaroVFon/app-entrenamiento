'use server'
import pool from '@/utils/postgres'
// import { sql } from '@vercel/postgres'

// const updatePassword = async (userid, password) => {
//   const { rows } =
//     await sql`UPDATE usuarios SET password = ${password} WHERE userid = ${userid}`
//   return rows
// }

// const updateEmail = async (userid, email) => {
//   const { rows } =
//     await sql`UPDATE usuarios SET email = ${email} WHERE userid = ${userid}`
//   return rows
// }

// const updateRole = async (userid, role) => {
//   const { rows } =
//     await sql`UPDATE usuarios SET rol = ${role} WHERE userid = ${userid}`
//   return rows
// }

// const deleteUserById = async (userid) => {
//   const { rows } = await sql`DELETE FROM usuarios WHERE userid = ${userid}`
//   return rows
// }

const updatePassword = async (userid, password) => {
  console.log(userid, password)
  const res = await pool.query(
    'UPDATE usuarios SET password = $1 WHERE userid = $2',
    [password, userid]
  )
  return res.rows
}
const updateEmail = async (userid, email) => {
  const res = await pool.query(
    'UPDATE usuarios SET email = $1 WHERE userid = $2',
    [email, userid]
  )
  return res.rows
}
const updateRole = async (userid, role) => {
  const res = await pool.query(
    'UPDATE usuarios SET rol = $1 WHERE userid = $2',
    [role, userid]
  )
  return res.rows
}
const deleteUserById = async (userid) => {
  const res = await pool.query('DELETE FROM usuarios WHERE userid = $1', [
    userid,
  ])
  return res.rows
}
export { updatePassword, updateEmail, updateRole, deleteUserById }
