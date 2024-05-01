import RegisterForm from '@/components/RegisterForm'
import RegisterList from '@/components/ResgisterList'
function RegistrosPage({ searchParams }) {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <RegisterForm />
        <RegisterList searchParams={searchParams} />
      </div>
    </>
  )
}
export default RegistrosPage
