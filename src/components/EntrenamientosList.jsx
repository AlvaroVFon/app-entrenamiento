import { getEntrenamientosByUserId } from '@/database/getEntrenamientosByUserId'
import { getEjerciciosByEntrenamientoId } from '@/database/getEjerciciosByEntrenamientoId'
async function EntrenamientoList({ userid }) {
  const entrenamientos = await getEntrenamientosByUserId(userid)
  const ejercicios = await getEjerciciosByEntrenamientoId()
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl'>Entrenamientos</h1>
      {entrenamientos.map((entrenamiento, index) => (
        <div key={index} className='flex flex-col gap-4 p-3 mt-5'>
          <div className='flex'>
            <button>delete</button>
            <h2 className='text-accent'>{entrenamiento.nombreentrenamiento}</h2>
          </div>
          {ejercicios.map((ejercicio, index) => {
            return ejercicio.entrenamientoid ===
              entrenamiento.entrenamientoid ? (
              <div
                key={index}
                className='flex flex-col items-center justify-center'
              >
                <p>{ejercicio.nombre}</p>
              </div>
            ) : null
          })}
        </div>
      ))}
    </div>
  )
}
export default EntrenamientoList
