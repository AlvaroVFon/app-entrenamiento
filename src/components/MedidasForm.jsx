'use client'
import { postMedidas } from '@/actions/postMedidas'
function MedidasForm({ userid }) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    await postMedidas(formdata, userid).then(
      () => (window.location.href = `/medidas?userid=${userid}`)
    )
  }
  const date = new Date()
  console.log(date)
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center gap-5 p-3 mt-20'
    >
      <input
        type='date'
        name='fechacreacion'
        id='date'
        defaultValue={new Date()
          .toISOString()
          .split('T')[0]
          .split('-')
          .reverse()
          .join('-')}
        className='bg-transparent border-b p-3 w-full text-primary'
      />
      <input
        type='number'
        name='altura'
        placeholder='altura'
        id='altura'
        className='bg-transparent border-b p-3 w-full'
      />
      <input
        type='number'
        name='peso'
        id='peso'
        placeholder='peso'
        className='bg-transparent border-b p-3 w-full'
      />
      <input
        type='number'
        name='porcentajegraso'
        id='porcentajegraso'
        placeholder='% grasa'
        className='bg-transparent border-b p-3 w-full'
      />
      <button className='p-3 border rounded hover:text-accent duration-300'>
        Guardar
      </button>
    </form>
  )
}
export default MedidasForm
