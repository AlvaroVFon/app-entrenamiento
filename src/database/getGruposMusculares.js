'use server'
import pool from '@/utils/postgres'

const getGruposMusculares = async () => {
  const res = await pool.query('SELECT * FROM grupo_muscular')
  return res.rows
}
export { getGruposMusculares }
