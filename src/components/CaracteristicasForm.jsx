'use client'
import Link from 'next/link'
import styles from '@/styles/calendar.module.css'
import { useRouter, usePathname } from 'next/navigation'

function CaracteristicasForm() {
  const defatultDate = new Date().toISOString().split('T')[0]
  const router = useRouter()
  const pathname = usePathname()
  const handleChange = (e) => {
    router.push(`${pathname}?date=${e.target.value}`)
  }
  return (
    <>
      <div className='flex'>
        <Link href={`${pathname}/add`}>
          {' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-square-rounded-plus'
            width='44'
            height='44'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#ffffff'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path
              stroke='none'
              d='M0 0h24v24H0z'
              fill='none'
            />
            <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z' />
            <path d='M15 12h-6' />
            <path d='M12 9v6' />
          </svg>
        </Link>
        <div className='flex gap-3'>
          {pathname !== '/medidas' && (
            <input
              type='date'
              name='date'
              placeholder='Añadir Registro'
              className={`${styles.calendar} text-center`}
              defaultValue={defatultDate}
              onChange={handleChange}
            />
          )}
        </div>
      </div>
    </>
  )
}
export default CaracteristicasForm
