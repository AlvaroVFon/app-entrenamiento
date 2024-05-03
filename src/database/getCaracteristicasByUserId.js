import { sql } from '@vercel/postgres'

const getCaracteristicasByUserId = async (userid) => {
  const { rows } = await sql`
    SELECT * FROM caracteristicas WHERE userid = ${userid}
  `
  return rows
}

export { getCaracteristicasByUserId }
