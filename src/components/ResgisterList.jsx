import { getEjerciciosByEntrenamientoIdFromRegistros } from '@/database/RegistrosEntrenamientos'
async function RegisterList({ entrenamientos }) {
  async function getEjercicios() {
    try {
      const res = await Promise.all(
        entrenamientos.map(async (entrenamiento) => {
          const ejercicios = await getEjerciciosByEntrenamientoIdFromRegistros(
            entrenamiento.entrenamientoid
          )
          return ejercicios
        })
      )
      return res
    } catch (error) {
      error
    }
  }
  const ejercicios = await getEjercicios()

  return (
    <div className='flex flex-col items-center justify-center'>
      {entrenamientos.map((entrenamiento) => (
        <>
          <h1 className='text-accent p-3'>
            {entrenamiento.nombreentrenamiento}
          </h1>
          <ul>
            {ejercicios.map((ejercicio) =>
              ejercicio.map((data) => (
                <div className='border-b p-3'>
                  <h2 className='text-sm py-3'>
                    Fecha:{data.fechacreacion.toLocaleString().split(',')[0]}
                  </h2>
                  <li className='font-bold'>Ejercicio: {data.nombre}</li>
                  <li>Peso: {data.peso}Kg</li>
                  <li>Series: {data.series}</li>
                  <li>Repeticiones: {data.repeticiones}</li>
                </div>
              ))
            )}
          </ul>
        </>
      ))}
    </div>
  )
}
export default RegisterList
