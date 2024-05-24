'use client'
import { registroEntrenamiento } from '@/actions/registroEntrenamiento'
import { useRouter, useSearchParams } from 'next/navigation'
export const ListaEjercicios = ({
  entrenamientoid,
  ejerciciosEntrenamientos,
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const userid = searchParams.get('userid')
  const ejercicios = (ejerciciosEntrenamientos =
    ejerciciosEntrenamientos.filter(
      (ejercicio) => ejercicio.entrenamientoid === entrenamientoid
    ))
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let data = {}
    data = {
      ...data,
      entrenamientoid,
      ejercicio: {
        ejercicioid: formData.getAll('ejercicioid'),
        peso: formData.getAll('peso'),
        repeticiones: formData.getAll('repeticiones'),
        series: formData.getAll('series'),
      },
    }
    registroEntrenamiento(data).then(
      (window.location.href = `/registros?userid=${userid}`)
    )
  }
  return (
    <form
      className='flex flex-col items-end p-5'
      onSubmit={handleSubmit}
    >
      {ejercicios?.map((ejercicio) => (
        <div
          key={ejercicio.ejercicioid}
          className='flex flex-col gap-5'
        >
          <h1 className='mt-6 font-bold'>{ejercicio.nombre}</h1>
          <div className=' grid grid-cols-3 items-center gap-3'>
            <input
              type='text'
              name='ejercicioid'
              value={ejercicio.ejercicioid}
              hidden
            />
            <input
              type='number'
              name='peso'
              step={0.5}
              id=''
              placeholder='Peso'
              className='bg-transparent border p-1 border-slate-500 rounded'
            />
            <input
              type='number'
              name='repeticiones'
              id=''
              placeholder='Reps'
              className='bg-transparent border p-1 border-slate-500 rounded'
            />
            <input
              type='number'
              name='series'
              id=''
              placeholder='Series'
              className='bg-transparent border p-1 border-slate-500 rounded'
            />
          </div>
        </div>
      ))}
      {ejercicios.length !== 0 && (
        <button className='border rounded p-2 mt-10 w-36'>Guardar</button>
      )}
    </form>
  )
}
