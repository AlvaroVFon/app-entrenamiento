import UserList from '@/components/UserList'
import getUsers from '@/database/getUsers'

async function AdminPage() {
  const users = await getUsers()
  return (
    <div className=''>
      <h1>Admin Page</h1>
      <UserList users={users} />
    </div>
  )
}
export default AdminPage
