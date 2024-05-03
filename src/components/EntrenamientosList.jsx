import { getEntrenamientosByUserId } from '@/database/getEntrenamientosByUserId'
import { getEjerciciosByEntrenamientoId } from '@/database/getEjerciciosByEntrenamientoId'
async function EntrenamientoList({ userid }) {
  const entrenamientos = await getEntrenamientosByUserId(userid)
  const ejercicios = await getEjerciciosByEntrenamientoId()
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      {entrenamientos.map((entrenamiento, index) => (
        <div
          key={index}
          className='flex flex-col gap-4 p-3 mt-5'
        >
          <div className='flex'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                viewBox='0 0 24 24'
              >
                <path
                  fill='#ffffff'
                  d='M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z'
                />
              </svg>
            </button>
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
