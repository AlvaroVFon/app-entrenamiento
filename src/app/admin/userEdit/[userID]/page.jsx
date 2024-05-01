import UserEditForm from '@/components/UserEditForm'
async function UserEditPage({ params }) {
  const { userID } = await params
  return (
    <div className=''>
      <h1>User Edit Page</h1>
      <UserEditForm userID={userID} />
    </div>
  )
}
export default UserEditPage
