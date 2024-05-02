import { sql } from '@vercel/postgres'

const deleteUserById = async (userid) => {
  const { rows } = await sql`DELETE FROM usuarios WHERE userid = ${userid}`
  return rows
}
export default deleteUserById
