'use client'
import { postMedidas } from '@/actions/postMedidas'
function MedidasForm({ userid }) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    await postMedidas(formdata, userid)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center gap-5 p-3 mt-20'
    >
      <input
        type='number'
        name='altura'
        placeholder='altura'
        id='altura'
        className='bg-transparent border-b p-3'
      />
      <input
        type='number'
        name='peso'
        id='peso'
        placeholder='peso'
        className='bg-transparent border-b p-3'
      />
      <input
        type='number'
        name='porcentajegraso'
        id='porcentajegraso'
        placeholder='% grasa'
        className='bg-transparent border-b p-3'
      />
      <button className='p-3 border rounded hover:text-accent duration-300'>
        Guardar
      </button>
    </form>
  )
}
export default MedidasForm
