import MedidasForm from '@/components/MedidasForm'
function MedidasAddPage({ searchParams }) {
  const { userid } = searchParams
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>Añadir Medidas</h1>
      <MedidasForm userid={userid} />
    </div>
  )
}
export default MedidasAddPage
