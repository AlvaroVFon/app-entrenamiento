'use client'
import {
  updatePassword,
  deleteUserById,
  updateEmail,
  updateRole,
} from '@/actions/adminActions'
function UserEditForm({ userid, userEmail, userRole, type }) {
  const handleDelete = async () => {
    confirm('Are you sure you want to delete this account?')
      ? await deleteUserById(userid).then(() => (window.location.href = '/'))
      : null
  }
  const handlePasswordChange = async (e) => {
    e.preventDefault()
    const password = e.target[0].value
    await updatePassword(userid, password).then(() => window.location.reload())
  }
  const handleEmailChange = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    await updateEmail(userid, email).then(() => window.location.reload())
  }
  const handleRoleChange = async (e) => {
    e.preventDefault()
    const role = e.target[0].value
    await updateRole(userid, role).then(() => window.location.reload())
  }
  return (
    <div className='grid place-items-center '>
      <form
        onSubmit={handlePasswordChange}
        className='flex justify-center items-center gap-5 p-6 w-96'
      >
        <input
          type='text'
          placeholder='Nueva contraseña'
          className='bg-transparent border-b p-3'
          required
        />
        <button
          type='submit'
          className='p-1 border rounded-md'
        >
          Guardar
        </button>
      </form>
      <form
        className='flex justify-center items-center gap-5 p-6 w-96'
        onSubmit={handleEmailChange}
      >
        <input
          type='email'
          defaultChecked={userEmail}
          placeholder='Nuevo email'
          className='bg-transparent border-b p-3'
        />
        <button
          type='submit'
          className='p-1 border rounded-md'
        >
          Guardar
        </button>
      </form>
      <form
        className='flex justify-center items-center gap-5 p-6 w-96'
        onSubmit={handleRoleChange}
      >
        {type === 'admin' && (
          <>
            <select
              className='bg-transparent border-b p-3 w-96'
              defaultValue={userRole}
            >
              <option
                value='admin'
                className='bg-dark'
              >
                Admin
              </option>
              <option
                value='user'
                className='bg-dark'
              >
                User
              </option>
            </select>
            <button
              type='submit'
              className='p-1 border rounded-md'
            >
              Guardar
            </button>
          </>
        )}
      </form>
      <form className='flex flex-col justify-center items-center gap-5 p-6 w-96'>
        {type === 'admin' && (
          <a
            href='#'
            onClick={handleDelete}
            className='text-center text-red-400'
          >
            Eliminar Cuenta
          </a>
        )}
      </form>
    </div>
  )
}
export default UserEditForm
