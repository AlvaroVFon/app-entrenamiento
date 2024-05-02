'use server'
import { sql } from '@vercel/postgres'

const getEntrenamientosByUserId = async (userid) => {
  const { rows } =
    await sql`SELECT * FROM entrenamientos WHERE userid =${userid}`
  return rows
}
export { getEntrenamientosByUserId }
