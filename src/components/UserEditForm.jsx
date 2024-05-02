'use client'
import deleteUserById from '@/database/deleteUserById'
function UserEditForm({ userID, userEmail, userRole }) {
  const handleDelete = async () => {
    confirm('Are you sure you want to delete this account?')
      ? await deleteUserById(userID)
      : null
  }
  return (
    <div className=''>
      <form
        action=''
        className='flex justify-center items-center w-full  gap-5 p-6'
      >
        <input
          type='text'
          defaultValue={userID}
          className='bg-transparent border-b hidden'
        />
        <input
          type='text'
          placeholder='Nueva contraseña'
          className='bg-transparent border-b w-full p-3'
          required
        />
        <button type='submit' className='p-1 border rounded-md'>
          Guardar
        </button>
      </form>
      <form className='flex justify-center items-center w-full  gap-5 p-6'>
        <input
          type='email'
          defaultChecked={userEmail}
          placeholder='Nuevo email'
          className='bg-transparent border-b w-full p-3'
        />
        <button type='submit' className='p-1 border rounded-md'>
          Guardar
        </button>
      </form>
      <form className='flex justify-center items-center w-full  gap-5 p-6'>
        <select
          className='bg-transparent border-b w-full p-3'
          defaultValue={userRole}
        >
          <option value='admin' className='bg-dark '>
            Admin
          </option>
          <option value='user' className='bg-dark '>
            User
          </option>
        </select>
        <button type='submit' className='p-1 border rounded-md'>
          Guardar
        </button>
      </form>
      <form className='flex flex-col justify-center items-center w-full  gap-5 p-6'>
        <a
          href='#'
          onClick={handleDelete}
          className='text-center text-red-400 w-full'
        >
          Eliminar Cuenta
        </a>
      </form>
    </div>
  )
}
export default UserEditForm
