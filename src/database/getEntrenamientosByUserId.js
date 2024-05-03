import pool from '@/utils/postgres'
const getEntrenamientosByUserId = async (userid) => {
  const res = await pool
    .query('select * from entrenamientos where userid=$1', [userid])
    .then((res) => {
      return res.rows
    })
    .catch((err) => err)
  return res
}
export { getEntrenamientosByUserId }
