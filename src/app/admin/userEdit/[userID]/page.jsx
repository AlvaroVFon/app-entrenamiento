import UserEditForm from '@/components/UserEditForm'
async function UserEditPage({ params, searchParams }) {
  const { userID } = await params
  const { email, role } = await searchParams
  return (
    <div className=''>
      <h1>User Edit Page</h1>
      <UserEditForm userID={userID} userEmail={email} userRole={role} />
    </div>
  )
}
export default UserEditPage
