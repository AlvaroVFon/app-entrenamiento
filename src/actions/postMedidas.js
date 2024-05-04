'use server'
import pool from '@/utils/postgres'

export const postMedidas = async (formdata, userid) => {
  const fechacreacion = formdata.get('fechacreacion')
  const altura = formdata.get('altura')
  const peso = formdata.get('peso')
  const porcentajegraso = formdata.get('porcentajegraso')
  const res = pool
    .query(
      'INSERT INTO caracteristicas (altura, peso, porcentajegraso, userid, fechacreacion) VALUES ($1, $2, $3, $4,$5) RETURNING *',
      [altura, peso, porcentajegraso, userid, fechacreacion]
    )
    .catch((error) => error)
}
