'use server'
import pool from '@/utils/postgres'

const getMedidasByUserId = async (userid) => {
  const res = await pool.query(
    'SELECT * FROM caracteristicas WHERE userid = $1',
    [userid]
  )
  return res.rows
}
export { getMedidasByUserId }
