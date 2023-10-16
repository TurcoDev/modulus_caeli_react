// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './scss/App.scss';
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import Curve from "./components/Curve";
import SecondScreen from "./components/SecondScreen";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="my-container">
        <Curve curve="curved-top"/>
        <Header name="Lucas" />
        <MainBody />
        <Footer />
        <Curve curve="curved-bottom"/>
      </div>
      <div className="my-container">
        <Curve curve="curved-top"/>
        <Header name="Lucas" />
        <SecondScreen />
        <Footer />
        <Curve curve="curved-bottom"/>
      </div>
    </>
  )
}

export default App
