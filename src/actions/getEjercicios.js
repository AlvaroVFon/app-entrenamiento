'use server'
import { sql } from '@vercel/postgres'

const getEjercicios = async (entrenamientoid) => {
  const rows =
    await sql`select * from ejercicios ej inner join "ejercicios_entrenamientos" ee on ej.ejercicioid = ee.ejercicioid
          where entrenamientoid = ${entrenamientoid}`
  console.log(rows)
  return rows
}
export { getEjercicios }
