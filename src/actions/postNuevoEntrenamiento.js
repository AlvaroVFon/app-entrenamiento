'use server'
// import { sql } from '@vercel/postgres'
// const postNuevoEntrenamiento = async (
//   entrenamientoid,
//   userid,
//   nombreentrenamiento,
//   ejercicioIDs
// ) => {
//   const { rows } =
//     await sql`INSERT INTO entrenamientos (entrenamientoid,userid,nombreentrenamiento) VALUES (${entrenamientoid},${userid},${nombreentrenamiento})`
//   for (const ejercicioID of ejercicioIDs) {
//     await sql`INSERT INTO ejercicios_entrenamientos (entrenamientoid,ejercicioid) VALUES (${entrenamientoid},${ejercicioID})`
//   }
// }
import pool from '@/utils/postgres'
const postNuevoEntrenamiento = async (
  entrenamientoid,
  userid,
  nombreentrenamiento,
  ejercicioIDs
) => {
  const res = await pool.query(
    'INSERT INTO entrenamientos (entrenamientoid,userid,nombreentrenamiento) VALUES ($1,$2,$3)',
    [entrenamientoid, userid, nombreentrenamiento]
  )
  for (const ejercicioID of ejercicioIDs) {
    await pool.query(
      'INSERT INTO ejercicios_entrenamientos (entrenamientoid,ejercicioid) VALUES ($1,$2)',
      [entrenamientoid, ejercicioID]
    )
  }
}
export { postNuevoEntrenamiento }
