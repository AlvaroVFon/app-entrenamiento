import { sql } from '@vercel/postgres'

const getEjerciciosByEntrenamientoId = async (entrenamientoid) => {
  const { rows } =
    await sql`SELECT ej.nombre, ee.entrenamientoid from ejercicios ej
  INNER JOIN ejercicios_entrenamientos ee on ej.ejercicioid = ee.ejercicioid
  INNER JOIN entrenamientos ent on ee.entrenamientoid = ent.entrenamientoid`
  return rows
}
export { getEjerciciosByEntrenamientoId }
