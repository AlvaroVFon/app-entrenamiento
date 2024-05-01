import MedidasList from '@/components/MedidasList'
import RegisterForm from '@/components/RegisterForm'

async function MedidasPage({ searchParams }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <RegisterForm />
      <MedidasList searchParams={searchParams} />
    </div>
  )
}
export default MedidasPage
