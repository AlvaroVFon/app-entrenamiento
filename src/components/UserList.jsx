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
            <Link href=''>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <g fill='none' fillRule='evenodd'>
                  <path d='M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z' />
                  <path
                    fill='currentColor'
                    d='M7.823 3.368A2 2 0 0 1 9.721 2h4.558a2 2 0 0 1 1.898 1.368L16.72 5H20a1 1 0 1 1 0 2h-1v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4a1 1 0 0 1 0-2h3.28zM9.387 5l.334-1h4.558l.334 1z'
                  />
                </g>
              </svg>
            </Link>
            <p className='text-left w-full'>
              {user.nombre} |{user.email} | {user.rol}
            </p>
            <Link
              href={`admin/userEdit/${user.userid}?email=${user.email}&role=${user.rol}`}
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
