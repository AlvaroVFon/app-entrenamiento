import UserProfileNav from '@/components/UserProfileNav'
function ProfilePage({ searchParams }) {
  const { userid } = searchParams
  return <UserProfileNav userid={userid} />
}
export default ProfilePage
