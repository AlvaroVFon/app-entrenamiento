import Link from 'next/link'
function ProfilePage({ searchParams }) {
  const { userid } = searchParams
  return (
    <div className='flex flex-col items-center gap-10 text-xl mt-10'>
      <Link
        href={`/perfil/edit?userid=${userid}`}
        className='hover:text-accent duration-300'
      >
        Editar Perfil
      </Link>
      <Link
        href={`/entrenamientos?userid=${userid}`}
        className='hover:text-accent duration-300'
      >
        Mis Entrenamientos
      </Link>
      <Link
        href={`/registros?userid=${userid}`}
        className='hover:text-accent duration-300'
      >
        Mis Registros
      </Link>
      <Link
        href={`/medidas?userid=${userid}`}
        className='hover:text-accent duration-300'
      >
        Mis Medidas
      </Link>
      <Link
        href={``}
        className='text-red-400'
      >
        Eliminar Cuenta
      </Link>
    </div>
  )
}
export default ProfilePage
