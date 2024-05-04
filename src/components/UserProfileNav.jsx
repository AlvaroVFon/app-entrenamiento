'use client'
import Link from 'next/link'
import {
  deleteUserById,
  updateEmail,
  updatePassword,
  updateRole,
} from '@/actions/adminActions'
function UserProfileNav({ userid }) {
  const handleDelete = async () => {
    confirm('Are you sure you want to delete this account?')
      ? await deleteUserById(userid)
          .then(() => (window.location.href = '/'))
          .then(sessionStorage.clear())
      : null
  }

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
        onClick={handleDelete}
        className='text-red-400'
      >
        Eliminar Cuenta
      </Link>
    </div>
  )
}
export default UserProfileNav
