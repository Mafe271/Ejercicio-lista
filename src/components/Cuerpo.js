import react from 'react'
import '../utils/css/Cuerpo.estilos.css'
import Logo from '../utils/images/Ford-Mustang.jpg';
function Cuerpo()  {
	return (
		<div className="Container_Cuerpo">
		<h1>
          Hola, este es el componente Cuerpo
       </h1>
       <img src={Logo} alt="hola este es Logo"/>
       </div>

		);
        
}
export default Cuerpo