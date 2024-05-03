import UserEditForm from '@/components/UserEditForm'

function EditPerfilPage({ searchParams }) {
  const { userid } = searchParams
  return (
    <UserEditForm
      userid={userid}
      type='user'
    />
  )
}
export default EditPerfilPage
