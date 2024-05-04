'use client'
function ErrorPage() {
  setTimeout(() => {
    window.location.href = '/admin'
  }, 3000)
  return (
    <div className=''>
      <h1>Error al añadir el ejercicio</h1>
      <p>Es posible que ya exista en la base de datos</p>
    </div>
  )
}
export default ErrorPage
