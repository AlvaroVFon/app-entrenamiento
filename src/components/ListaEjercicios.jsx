export const ListaEjercicios = ({
  entrenamientoid,
  ejerciciosEntrenamientos,
}) => {
  const ejercicios = (ejerciciosEntrenamientos =
    ejerciciosEntrenamientos.filter(
      (ejercicio) => ejercicio.entrenamientoid === entrenamientoid
    ))
  console.log(entrenamientoid)
  console.log(ejercicios)
  return <form action=''></form>
}
