'use server'
import pool from '@/utils/postgres'
const getEjercicios = async () => {
  const res = await pool.query('select * from ejercicios')
  return res.rows
}
export { getEjercicios }
