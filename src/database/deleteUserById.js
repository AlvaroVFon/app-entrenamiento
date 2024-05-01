import { sql } from '@vercel/postgres'

const deleteUserById = async (userID) => {
  const { rows } = await sql`DELETE FROM usuarios WHERE id = ${userID}`
  return rows
}
export default deleteUserById
