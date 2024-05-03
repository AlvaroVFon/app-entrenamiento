'use client'
import ListaEjercicios from './ListaEjercicios'
import { useState } from 'react'
function SelectEntrenamiento({ entrenamientos }) {
  const [entrenaientoid, setEntrenamientoId] = useState(null)
  const handleChange = (e) => {
    const entrenaientoid = e.target.value
    console.log(entrenaientoid)
    setEntrenamientoId(entrenaientoid)
  }
  return (
    <div className=''>
      <form className='flex flex-col items-center'>
        <select
          name='entrenamiento'
          id=''
          className='bg-transparent'
          onChange={handleChange}
        >
          {entrenamientos?.map((entrenamiento) => (
            <option
              key={entrenamiento.entrenamientoid}
              value={entrenamiento.entrenamientoid}
              className='bg-dark text-white'
            >
              {entrenamiento.nombreentrenamiento}
            </option>
          ))}
        </select>
      </form>
      <ListaEjerciciosPorEntrenamiento entrenamientoid={entrenaientoid} />
    </div>
  )
}
export default SelectEntrenamiento
