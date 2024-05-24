'use client'
import { ListaEjercicios } from './ListaEjercicios'
import { useState } from 'react'
function SelectEntrenamiento({
  entrenamientos,
  entrenamientosId,
  ejerciciosEntrenamientos,
}) {
  const [entrenaientoid, setEntrenamientoId] = useState(null)
  const handleChange = (e) => {
    const entrenaientoid = e.target.value
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
          <option
            value=''
            selected
            disabled
            className='bg-[#202020] text-white'
          >
            Selecciona un entrenamiento
          </option>
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
      <ListaEjercicios
        entrenamientoid={entrenaientoid}
        ejerciciosEntrenamientos={ejerciciosEntrenamientos}
      />
    </div>
  )
}
export default SelectEntrenamiento
