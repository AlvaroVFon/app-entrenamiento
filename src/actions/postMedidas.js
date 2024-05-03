'use server'
import pool from '@/utils/postgres'

export const postMedidas = async (formdata, userid) => {
  const altura = formdata.get('altura')
  const peso = formdata.get('peso')
  const porcentajegraso = formdata.get('porcentajegraso')
  const res = pool.query(
    'INSERT INTO caracteristicas (altura, peso, porcentajegraso, userid) VALUES ($1, $2, $3, $4) RETURNING *',
    [altura, peso, porcentajegraso, userid]
  )
  return res.rows
}
