'use client'
import { postNuevoEntrenamiento } from '@/actions/postNuevoEntrenamiento'
import { v4 as uuid } from 'uuid'
function NuevoEntrenamientoForm({ ejercicios, userid }) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const ejercicioIds = []
    for (let i = 1; i <= 4; i++) {
      const ejercicioId = e.target[`ejercicio${i}`].value
      if (ejercicioId !== '') ejercicioIds.push(ejercicioId)
    }
    const entrenamientoid = uuid()
    const nombreentrenamiento = e.target.nombreentrenamiento.value
    await postNuevoEntrenamiento(
      entrenamientoid,
      userid,
      nombreentrenamiento,
      ejercicioIds
    ).then(() => (window.location.href = `/entrenamientos/?userid=${userid}`))
  }
  return (
    <form
      className='flex flex-col items-center gap-5 bg-dark p-5 rounded-lg w-96'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='nombreentrenamiento'
        id='nombreentrenamiento'
        className='bg-dark text-white border-b p-3 text-xl'
        placeholder='Nombre del entrenamiento'
        required
      />
      <select
        name='ejercicio1'
        id=''
        className='bg-dark text-white border-b p-3'
        required
      >
        <option
          value=''
          selected
        >
          Selecciona un ejercicio
        </option>
        {ejercicios?.map((ejercicio) => (
          <option
            key={ejercicio.ejercicioid}
            value={ejercicio.ejercicioid}
            className='bg-dark text-white'
          >
            {ejercicio.nombre}
          </option>
        ))}
      </select>
      <select
        name='ejercicio2'
        id=''
        className='bg-dark text-white border-b p-3'
      >
        <option
          value=''
          selected
        >
          Selecciona un ejercicio
        </option>
        {ejercicios?.map((ejercicio) => (
          <option
            key={ejercicio.ejercicioid}
            value={ejercicio.ejercicioid}
            className='bg-dark text-white'
          >
            {ejercicio.nombre}
          </option>
        ))}
      </select>
      <select
        name='ejercicio3'
        id=''
        className='bg-dark text-white border-b p-3'
      >
        <option
          value=''
          selected
        >
          Selecciona un ejercicio
        </option>
        {ejercicios?.map((ejercicio) => (
          <option
            key={ejercicio.ejercicioid}
            value={ejercicio.ejercicioid}
            className='bg-dark text-white'
          >
            {ejercicio.nombre}
          </option>
        ))}
      </select>
      <select
        name='ejercicio4'
        id=''
        className='bg-dark text-white border-b p-3'
      >
        <option
          value=''
          selected
        >
          Selecciona un ejercicio
        </option>
        {ejercicios?.map((ejercicio) => (
          <option
            key={ejercicio.ejercicioid}
            value={ejercicio.ejercicioid}
            className='bg-dark text-white'
          >
            {ejercicio.nombre}
          </option>
        ))}
      </select>

      <button className='p-3 border rounded'>Guardar</button>
    </form>
  )
}
export default NuevoEntrenamientoForm
