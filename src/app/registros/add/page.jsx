import { getEntrenamientosByUserId } from '@/database/getEntrenamientosByUserId'
import SelectEntrenamiento from '@/components/SelectEntrenamiento'
import { getEjerciciosByEntrenamientoId } from '@/database/getEjerciciosByEntrenamientoId'
async function RegisterAddPage({ searchParams }) {
  const { userid } = searchParams
  const entrenamientos = await getEntrenamientosByUserId(userid)
  const entrenamientosID = (await getEntrenamientosByUserId(userid)).map(
    (entrenamiento) => entrenamiento.entrenamientoid
  )
  const ejerciciosEntrenamientos = await getEjerciciosByEntrenamientoId(
    entrenamientosID.map((entrenamiento) => entrenamiento.entrenamientoid)
  )

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <h1 className='text-2xl'>Selecciona un entrenamiento</h1>
      <SelectEntrenamiento
        entrenamientos={entrenamientos}
        entrenamientosId={entrenamientosID}
        ejerciciosEntrenamientos={ejerciciosEntrenamientos}
      />
    </div>
  )
}
export default RegisterAddPage
