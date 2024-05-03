import { sql } from '@vercel/postgres'

const getEjercicios = async () => {
  const { rows } = await sql`select * from ejercicios`
  return rows
}
export { getEjercicios }
