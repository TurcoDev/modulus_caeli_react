import '../scss/Modal.scss'


function Modal() {
  return(
    // Modal
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <img src="./assets/images/bernard-hermant-d4J2kkJmuGI-unsplash.jpg" alt="" width="64" height="64"/>
            <div className="modal-text-container">
              <h6 className="modal-title fs-5" id="exampleModalLabel">Efecto Piscina</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, non rerum illum deleniti explicabo
                voluptatem maiores ad facere necessitatibus sit officia eligendi quas dignissimos quis harum impedit
                recusandae perspiciatis? Accusantium.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal