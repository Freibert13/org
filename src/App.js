import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miOrg';

function App() {

  const [mostraFormulario, actualizarMostrar] = useState (true)

  const cambiarMostrar = () => {
    actualizarMostrar (!mostraFormulario)
  }
  
  
  return (
    <div >
     < Header />

     {mostraFormulario === true ?< Formulario /> :<></>} 
    
     < MiOrg cambiarMostrar = {cambiarMostrar} />

      
    </div>
  );
}

export default App;
