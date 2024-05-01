'use client'
import deleteUserById from '@/database/deleteUserById'
function UserEditForm({ userID }) {
  const handleDelete = async () => {
    confirm('Are you sure you want to delete this account?')
      ? await deleteUserById(userID)
      : null
  }
  return (
    <form
      action=''
      className='flex flex-col justify-center items-center w-full h-96 gap-5 p-6'
    >
      <input
        type='text'
        defaultValue={userID}
        className='bg-transparent border-b hidden'
      />
      <input
        type='text'
        placeholder='Nueva contraseña'
        className='bg-transparent border-b w-full p-3 mt-10'
        required
      />
      <input
        type='email'
        placeholder='Nuevo email'
        className='bg-transparent border-b w-full p-3'
      />
      <select className='bg-transparent border-b w-full p-3'>
        <option value='admin' className='bg-dark '>
          Admin
        </option>
        <option value='user' className='bg-dark '>
          User
        </option>
      </select>
      <a
        href='#'
        onClick={handleDelete}
        className='text-center text-red-400 w-full'
      >
        Eliminar Cuenta
      </a>
      <button type='submit' className='p-2 border rounded-md'>
        Submit
      </button>
    </form>
  )
}
export default UserEditForm
