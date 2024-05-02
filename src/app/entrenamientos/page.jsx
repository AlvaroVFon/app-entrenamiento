import EntrenamientoList from '@/components/EntrenamientosList'

function EntrenamientosPage({ searchParams }) {
  const { userid } = searchParams
  return (
    <div className=''>
      <EntrenamientoList userid={userid} />
    </div>
  )
}
export default EntrenamientosPage
