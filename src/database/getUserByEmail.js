import { sql } from '@vercel/postgres'

const getUserByEmail = async (userEmail) => {
  const { rows } = await sql`SELECT * FROM usuarios WHERE email = ${userEmail}`
  return rows
}
export { getUserByEmail }
