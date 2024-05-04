'use client'
import { postEjercicio } from '@/actions/postEjercicio'
function CrearEjerciciosForm({ gruposMusculares }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formdata = new FormData(event.target)
    postEjercicio(formdata).then(() => window.location.reload())
  }
  return (
    <div className='flex flex-col items-center gap-6'>
      <h1 className='text-2xl font-bold'>Crear ejercicios</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center gap-5 w-96'
      >
        <input
          type='text'
          name='nombre'
          id='nombre'
          placeholder='Nombre del ejercicio'
          className='bg-transparent border-b p-3 w-full'
          required
        />
        <textarea
          type='text'
          name='descripcion'
          id='descripcion'
          className='bg-transparent border-b p-3 w-full resize-none'
        />
        <select
          name='grupomuscular'
          id='grupomuscular'
          className='bg-transparent border-b p-3 w-full'
          required
        >
          <option
            value=''
            selected
            disabled
            className='bg-dark'
          >
            Selecciona un grupo muscular
          </option>
          {gruposMusculares.map((grupoMuscular) => (
            <option
              key={grupoMuscular.grupomuscularid}
              value={grupoMuscular.grupomuscularid}
              className='bg-dark'
            >
              {grupoMuscular.nombre}
            </option>
          ))}
        </select>
        <button className='p-3 border rounded hover:text-accent duration-300'>
          Guardar
        </button>
      </form>
    </div>
  )
}
export default CrearEjerciciosForm
