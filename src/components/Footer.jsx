import react from 'react'
import '../utils/css/Footer.estilos.css'
import Logo from '../utils/images/images (1).jpg';

function  Footer() {
	return (
		<div className="Container_Footer">
		<h1>
       Hola, este es el componente Footer
       </h1>
       <img src={Logo} alt="hola este es Logo"/>
       </div>

		);
        
}
export default Footer