import '../scss/Header.scss';

function Header() {


  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <nav>
          <ul>
            <li><a href="" rel="noopener noreferrer">Modulus Caeli</a></li>
            <li><a href="" rel="noopener noreferrer">Unete a nosotros</a></li>
            <li><a href="" rel="noopener noreferrer">Contactanos</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header