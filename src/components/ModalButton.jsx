import '../scss/ModalButton.scss'
import Modal from "./Modal";

function ModalButton(params) {
  return (
    <>
      <button style={params.position} className="pulse" data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
      <Modal />
    </>
  )
}


export default ModalButton