import { getEjercicios } from '@/database/getEjercicios'
import { v4 as uuidv4 } from 'uuid'
import NuevoEntrenamientoForm from '@/components/NuevoEntrenamientoForm'
async function EntrenamientoAddPage({ searchParams }) {
  const eid = uuidv4()
  const { userid } = searchParams
  const ejercicios = await getEjercicios()
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Nuevo entrenamiento</h1>
      <NuevoEntrenamientoForm
        ejercicios={ejercicios}
        userid={userid}
        eid={eid}
      />
    </div>
  )
}
export default EntrenamientoAddPage
