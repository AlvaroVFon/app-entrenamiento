import CrearEjerciciosForm from '@/components/CrearEjerciciosForm'
import { getGruposMusculares } from '@/database/getGruposMusculares'
import UserList from '@/components/UserList'
import getUsers from '@/database/getUsers'

async function AdminPage() {
  const users = await getUsers()
  const gruposMusculares = await getGruposMusculares()

  return (
    <div className=''>
      <UserList users={users} />
      <CrearEjerciciosForm gruposMusculares={gruposMusculares} />
    </div>
  )
}
export default AdminPage
