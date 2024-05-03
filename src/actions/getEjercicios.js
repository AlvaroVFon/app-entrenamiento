'use server'
import pool from '@/utils/postgres'
// import { sql } from '@vercel/postgres'

// const getEjercicios = async (entrenamientoid) => {
//   const rows =
//     await sql`select * from ejercicios ej inner join "ejercicios_entrenamientos" ee on ej.ejercicioid = ee.ejercicioid
//           where entrenamientoid = ${entrenamientoid}`
//   return rows
// }
const getEjercicios = async (entrenamientoid) => {
  const rows = await pool.query(
    'select * from ejercicios ej inner join "ejercicios_entrenamientos" ee on ej.ejercicioid = ee.ejercicioid where entrenamientoid = $1',
    [entrenamientoid]
  )
  return rows.rows
}
export { getEjercicios }
