import SelectEntrenamiento from '@/components/SelectEntrenamiento'
import { getEntrenamientosByUserId } from '@/database/getEntrenamientosByUserId'
async function RegisterAddPage({ searchParams }) {
  const { userid } = searchParams
  const entrenamientos = await getEntrenamientosByUserId(userid)

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <h1 className='text-2xl'>Selecciona un entrenamiento</h1>
      <SelectEntrenamiento entrenamientos={entrenamientos} />
    </div>
  )
}
export default RegisterAddPage
