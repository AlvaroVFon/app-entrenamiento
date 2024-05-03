import UserEditForm from '@/components/UserEditForm'
async function UserEditPage({ params, searchParams }) {
  const { userID } = await params
  const { email, role } = await searchParams
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl'>
        Editando: <span className='font-thin'>{email}</span>
      </h1>
      <UserEditForm
        userID={userID}
        userEmail={email}
        userRole={role}
      />
    </div>
  )
}
export default UserEditPage
