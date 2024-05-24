import pool from '@/utils/postgres'

const getIdEntrenamientosByUserId = async (userid) => {
  const { rows } = await pool.query(
    `select distinct e.entrenamientoid,e.nombreentrenamiento from registros_entrenamientos re 
      inner join entrenamientos e on re.entrenamientoid = e.entrenamientoid 
      inner join ejercicios ej on ej.ejercicioid = re.ejercicioid 
      where e.userid=$1`,
    [userid]
  )
  return rows
}

const getEjerciciosByEntrenamientoIdFromRegistros = async (entrenamientoid) => {
  const { rows } = await pool.query(
    `select  ej.nombre, re.peso,re.repeticiones, re.series, re.fechacreacion from registros_entrenamientos re 
  inner join entrenamientos e on re.entrenamientoid = e.entrenamientoid
  inner join ejercicios ej on ej.ejercicioid = re.ejercicioid
  where re.entrenamientoid=$1`,
    [entrenamientoid]
  )
  return rows
}

export {
  getIdEntrenamientosByUserId,
  getEjerciciosByEntrenamientoIdFromRegistros,
}
