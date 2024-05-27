import UserEditForm from '@/components/UserEditForm'

function EditPerfilPage({ searchParams }) {
  const { userid } = searchParams
  return (
    <UserEditForm
      userID={userid}
      type='user'
    />
  )
}
export default EditPerfilPage
