import { getMedidasByUserId } from '@/database/getMedidasByUserId'
async function MedidasList({ searchParams }) {
  const { userid } = searchParams
  const medidas = await getMedidasByUserId(userid)

  return (
    <div className='flex flex-col '>
      {medidas.map((medida, index) => (
        <div
          key={index}
          className='flex flex-col gap-2 items-start mt-10'
        >
          <p className='text-accent text-lg'>
            Fecha:{' '}
            {medida.fechacreacion
              .toISOString()
              .split('T')[0]
              .split('-')
              .reverse()
              .join('-')}
          </p>
          <p>Altura: {medida.altura}</p>
          <p>Peso: {medida.peso}</p>
          <p>Porcentaje Grasa: {medida.porcentajegraso}</p>
        </div>
      ))}
    </div>
  )
}
export default MedidasList
