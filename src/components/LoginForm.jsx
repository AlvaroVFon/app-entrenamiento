'use client'
import { handleLogin } from '@/actions/handleLogin'
function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const isLogged = await handleLogin(formdata)
    if (isLogged) {
      sessionStorage.setItem('user', JSON.stringify(isLogged))
      if (isLogged.rol === 'admin') {
        window.location.href = '/admin'
      } else {
        window.location.href = `entrenamientos?userid=${isLogged.userid}`
      }
    } else {
      alert('Invalid credentials')
      window.location.reload()
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col w-full h-screen items-center justify-center gap-16'
    >
      <input
        type='text'
        name='email'
        placeholder='Email'
        className='bg-[#202020] border-b p-3 focus:outline-none'
        required
      />
      <div className=''>
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='bg-[#202020] border-b p-3 focus:outline-none'
          required
        />
      </div>
      <p>
        Don&apos;t have an account?{' '}
        <a href='/signup' className='font-semibold text-accent'>
          Sign up
        </a>
      </p>
      <button className='border p-2 rounded-md'>Submit</button>
    </form>
  )
}
export default LoginForm
