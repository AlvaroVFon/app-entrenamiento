'use server'
import pool from '@/utils/postgres'
const registroEntrenamiento = async (data) => {
  console.log(data)
  const { rows } = await pool.query(
    `INSERT INTO registros_entrenamientos(registroentrenamientosid, entrenamientoid, ejercicioid, peso,repeticiones,series) VALUES
    ($1,$2,$3,$4,$5,$6),
    ($7,$2,$8,$9,$10,$11),
    ($12,$2,$13,$14,$15,$16),
    ($17,$2,$18,$19,$20,$21)`,
    [
      crypto.randomUUID(),
      data?.entrenamientoid,
      data?.ejercicio?.ejercicioid[0],
      data?.ejercicio?.peso[0],
      data?.ejercicio?.repeticiones[0],
      data?.ejercicio?.series[0],
      crypto.randomUUID(),
      data?.ejercicio?.ejercicioid[1],
      data?.ejercicio?.peso[1],
      data?.ejercicio?.repeticiones[1],
      data?.ejercicio?.series[1],
      crypto.randomUUID(),
      data?.ejercicio?.ejercicioid[2],
      data?.ejercicio?.peso[2],
      data?.ejercicio?.repeticiones[2],
      data?.ejercicio?.series[2],
      crypto.randomUUID(),
      data?.ejercicio?.ejercicioid[3],
      data?.ejercicio?.peso[3],
      data?.ejercicio?.repeticiones[3],
      data?.ejercicio?.series[3],
    ]
  )
}

export { registroEntrenamiento }
