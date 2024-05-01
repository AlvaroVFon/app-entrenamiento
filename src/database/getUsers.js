import { sql } from '@vercel/postgres'

const getUsers = async () => {
  const { rows } = await sql`SELECT * FROM usuarios`
  return rows
}
export default getUsers
