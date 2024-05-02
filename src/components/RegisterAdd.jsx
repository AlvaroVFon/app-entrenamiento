import { getEntrenamientosByUserId } from '@/database/getEntrenamientosByUserId'
async function RegisterAdd() {
  const entrenamientos = await getEntrenamientosByUserId(
    '85e307f4-ae4e-46ef-b93c-044b0ea22397'
  )

  return (
    <div className='flex flex-col justify-center items-center'>
      <select
        name='entrenamiento'
        id='entrenamiento'
        className='bg-transparent'
      >
        {entrenamientos.map((entrenamiento) => (
          <option
            key={entrenamiento.entrenamientoID}
            value={entrenamiento.entrenamientoID}
            className='bg-dark'
          >
            {entrenamiento.nombreEntrenamiento}
          </option>
        ))}
      </select>
      <form action=''></form>
    </div>
  )
}
export default RegisterAdd
