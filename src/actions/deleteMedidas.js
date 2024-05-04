'use server'
import pool from '@/utils/postgres'
const deleteMedidas = async (userid, fechacreacion) => {
  console.log(userid, fechacreacion)
  const res = await pool.query(
    'DELETE FROM caracteristicas WHERE userid = $1 AND fechacreacion = $2',
    [userid, fechacreacion]
  )
}
export { deleteMedidas }
