'use server'
import pool from '@/utils/postgres'

const getMedidasByUserId = async (userid) => {
  const res = await pool.query(
    'SELECT * FROM caracteristicas WHERE userid = $1 ORDER BY fechacreacion DESC',
    [userid]
  )
  return res.rows
}
export { getMedidasByUserId }
