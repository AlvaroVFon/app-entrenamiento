'use client'
import { useTransition } from 'react'
import { deleteMedidas } from '@/actions/deleteMedidas'
function MedidasList({ medidas, userid }) {
  const [isPending, startTransition] = useTransition()
  return (
    <div className='flex flex-col '>
      {medidas.map((medida, index) => (
        <div
          key={index}
          className='flex flex-col gap-2 items-start mt-10'
        >
          <div className='flex items-center gap-3'>
            <button
              onClick={() => {
                startTransition(() =>
                  deleteMedidas(userid, medida.fechacreacion)
                )
                setTimeout(() => {
                  window.location.reload()
                }, 100)
              }}
            >
              <svg
                className='hover:text-accent'
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                viewBox='0 0 24 24'
              >
                <path
                  fill='#ffffff'
                  d='M7.616 20q-.672 0-1.144-.472T6 18.385V6h-.5q-.213 0-.357-.143T5 5.5t.143-.357T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.214 0 .357.143T19 5.5t-.143.357T18.5 6H18v12.385q0 .67-.472 1.143q-.472.472-1.143.472zM12 13.208l2.246 2.246q.14.14.344.15t.364-.15t.16-.354t-.16-.354L12.708 12.5l2.246-2.246q.14-.14.15-.344t-.15-.364t-.354-.16t-.354.16L12 11.792L9.754 9.546q-.14-.14-.344-.15t-.364.15t-.16.354t.16.354l2.246 2.246l-2.246 2.246q-.14.14-.15.344t.15.364t.354.16t.354-.16z'
                />
              </svg>
            </button>
            <p className='text-accent text-lg'>
              Fecha:{' '}
              {medida.fechacreacion
                .toISOString()
                .split('T')[0]
                .split('-')
                .reverse()
                .join('-')}
            </p>
          </div>
          <p>Altura: {medida.altura}</p>
          <p>Peso: {medida.peso}</p>
          <p>Porcentaje Grasa: {medida.porcentajegraso}</p>
        </div>
      ))}
    </div>
  )
}
export default MedidasList
