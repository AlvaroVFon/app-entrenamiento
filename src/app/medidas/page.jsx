import MedidasList from '@/components/MedidasList'
import Link from 'next/link'

async function MedidasPage({ searchParams }) {
  const { userid } = searchParams
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>Medidas</h1>
      <Link
        href={`/medidas/add?userid=${userid}`}
        className='flex items-center gap-3 mt-10'
      >
        {' '}
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 24 24'
          >
            <path
              fill='#ffffff'
              d='M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm-6 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z'
            />
          </svg>
        </span>
        Añadir Medidas
      </Link>
      <MedidasList searchParams={searchParams} />
    </div>
  )
}
export default MedidasPage
