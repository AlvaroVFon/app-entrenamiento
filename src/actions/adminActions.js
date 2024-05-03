'use server'
import { sql } from '@vercel/postgres'

const updatePassword = async (userid, password) => {
  const { rows } =
    await sql`UPDATE usuarios SET password = ${password} WHERE userid = ${userid}`
  return rows
}

const updateEmail = async (userid, email) => {
  const { rows } =
    await sql`UPDATE usuarios SET email = ${email} WHERE userid = ${userid}`
  return rows
}

const updateRole = async (userid, role) => {
  const { rows } =
    await sql`UPDATE usuarios SET rol = ${role} WHERE userid = ${userid}`
  return rows
}

const deleteUserById = async (userid) => {
  const { rows } = await sql`DELETE FROM usuarios WHERE userid = ${userid}`
  return rows
}
export { updatePassword, updateEmail, updateRole, deleteUserById }
