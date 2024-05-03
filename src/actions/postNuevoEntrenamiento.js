'use server'
import { sql } from '@vercel/postgres'
const postNuevoEntrenamiento = async (
  entrenamientoid,
  userid,
  nombreentrenamiento,
  ejercicioIDs
) => {
  const { rows } =
    await sql`INSERT INTO entrenamientos (entrenamientoid,userid,nombreentrenamiento) VALUES (${entrenamientoid},${userid},${nombreentrenamiento})`
  for (const ejercicioID of ejercicioIDs) {
    await sql`INSERT INTO ejercicios_entrenamientos (entrenamientoid,ejercicioid) VALUES (${entrenamientoid},${ejercicioID})`
  }
}
export { postNuevoEntrenamiento }
