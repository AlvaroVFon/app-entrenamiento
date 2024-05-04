'use server'
import pool from '@/utils/postgres'
import { v4 as uuid } from 'uuid'

const postEjercicio = async (formdata) => {
  const ejercicioid = uuid()
  const nombre = formdata.get('nombre')
  const descripcion = formdata.get('descripcion')
  const grupomuscularid = formdata.get('grupomuscular')
  const res = await pool
    .query(
      'INSERT INTO ejercicios (ejercicioid, nombre, descripcion, grupomuscularid) VALUES ($1, $2, $3, $4)',
      [ejercicioid, nombre, descripcion, grupomuscularid]
    )
    .catch((error) => error)
}
export { postEjercicio }
