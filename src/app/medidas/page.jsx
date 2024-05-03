import MedidasList from '@/components/MedidasList'
import CaracteristicasForm from '@/components/CaracteristicasForm'

async function MedidasPage({ searchParams }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <CaracteristicasForm />
      <MedidasList searchParams={searchParams} />
    </div>
  )
}
export default MedidasPage
