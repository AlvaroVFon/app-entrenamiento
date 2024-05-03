import { sql } from '@vercel/postgres'

const deleteEntrenamientoById = async (entrenamientoid) => {
  await sql`DELETE FROM entrenamientos WHERE entrenamientoid = ${entrenamientoid}`
  await sql`DELETE FROM "registros_entrenamiento WHERE entrenamientoid = ${entrenamientoid}"`
}

export { deleteEntrenamientoById }
