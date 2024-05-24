// import { sql } from '@vercel/postgres'

// const getEjerciciosByEntrenamientoId = async (entrenamientoid) => {
//   const res = await sql`SELECT ej.nombre, ee.entrenamientoid from ejercicios ej
//   INNER JOIN ejercicios_entrenamientos ee on ej.ejercicioid = ee.ejercicioid
//   INNER JOIN entrenamientos ent on ee.entrenamientoid = ent.entrenamientoid`
//   return res.rows
// }
import pool from '@/utils/postgres'
const getEjerciciosByEntrenamientoId = async (entrenamientoid) => {
  const res = await pool.query(
    'SELECT ej.ejercicioid, ej.nombre, ee.entrenamientoid from ejercicios ej INNER JOIN ejercicios_entrenamientos ee on ej.ejercicioid = ee.ejercicioid INNER JOIN entrenamientos ent on ee.entrenamientoid = ent.entrenamientoid'
  )
  return res.rows
}
export { getEjerciciosByEntrenamientoId }
