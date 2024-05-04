import UserList from '@/components/UserList'
import getUsers from '@/database/getUsers'

async function AdminPage() {
  const users = await getUsers()
  return (
    <div className=''>
      <UserList users={users} />
    </div>
  )
}
export default AdminPage
