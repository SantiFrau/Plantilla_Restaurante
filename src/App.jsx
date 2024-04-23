import Menu from "./components/Menu"
import Inicio from "./components/inicio"
import Nav from "./components/nav"
import About from "./components/about"
import Footer from "./components/footer"
import { useState, useEffect } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fondo ${scrollPosition < 550 ? 'visible' : 'oculto'}`}></div>
      <div className={`fondo2 ${scrollPosition >= 550 ? 'visible' : 'oculto'}`}></div>


      <Nav></Nav>
     <Inicio></Inicio>
       
     <Menu></Menu>


     <About></About>

     <Footer></Footer>
    </>
  )
}

export default App
