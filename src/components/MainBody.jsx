import '../scss/MainBody.scss'

function MainBody() {
  return (
    <>
      <main className="main-container">
        <section className="main-title">
          <h1>Modulus Caeli</h1>
          <h2>Innovacion en viviendas modulares</h2>
        </section>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <section className="main-text">
                <p>Sin costo de construccion y rapida instalacion</p>
              </section>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <section className="main-text">
                <p>Pequeñas viviendas de lujo</p>
              </section>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <section className="main-text">
                <p>Comodidad en locaciones unicas</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


export default MainBody