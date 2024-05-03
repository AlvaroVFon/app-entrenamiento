import { signup } from '@/actions/signup'
async function SignupForm() {
  return (
    <form
      action={signup}
      className='flex flex-col items-center gap-6 p-3'
    >
      <input
        type='text'
        name='nombre'
        id='nombre'
        placeholder='Nombre'
        className='bg-transparent border-b p-3'
        required
      />
      <input
        type='email'
        name='email'
        id='email'
        placeholder='example@email.com'
        className='bg-transparent border-b p-3'
        required
      />
      <input
        type='password'
        name='password'
        id='password'
        placeholder='Password'
        className='bg-transparent border-b p-3'
        required
      />
      <button className='p-3 border rounded hover:text-accent duration-300'>
        Registrase
      </button>
    </form>
  )
}
export default SignupForm
