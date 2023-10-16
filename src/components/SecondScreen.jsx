import '../scss/SecondScreen.scss'
import ModalButton from './ModalButton'

function SecondScreen() {

  return (
    <>
      <section className="plus">
        <ModalButton position={{ top: '10%', left: '30%' }} />
        <ModalButton position={{ top: '30%', left: '30%' }} />
        <ModalButton position={{ top: '50%', left: '50%' }} />
        <ModalButton position={{ top: '70%', left: '80%' }} />
        <ModalButton position={{ top: '90%', left: '90%' }} />
      </section>
    </>
  )
}


export default SecondScreen