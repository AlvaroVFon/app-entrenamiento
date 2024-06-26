import Link from 'next/link'
function UserList({ users }) {
  return (
    <div className='flex flex-col justify-center items-center p-10'>
      <h1 className='text-2xl font-bold'>User List</h1>
      <ul className='mt-4 flex flex-col gap-5'>
        {users.map((user) => (
          <li
            key={user.userid}
            className='flex justify-between items-center gap-3'
          >
            <p className='text-left w-full'>
              {user.nombre} |{user.email} | {user.rol}
            </p>
            <Link
              href={`admin/userEdit/${user.userid}?email=${user.email}&role=${user.rol}`}
              className='hover:text-accent cursor-pointer duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687q0 .375-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25q.375 0 .688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z'
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default UserList
