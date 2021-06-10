import react from 'react'
import '../utils/css/Footer.estilos.css'
import Logo from '../utils/images/images (1).jpg';

function  Footer() {
	return (
		<div className="Container_Footer">
		 <div className="ContainerText">
		<h1>
       Hola, este es el componente Footer
       </h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nesciunt molestiae cum, doloremque recusandae illo a. Sint, fuga quos? Debitis ipsum corrupti consequatur velit ullam enim exercitationem minima id eos.
            Deserunt culpa nobis architecto ratione quae quisquam rem rerum dolorum eveniet ducimus, velit laudantium, laboriosam error delectus? Voluptatibus amet labore autem dicta doloribus tempore recusandae, hic nemo voluptatum exercitationem sint?
            </p>
            </div>
            <div className="ContainerImage">
       <img src={Logo} alt="hola este es Logo"/>
       </div>
    </div>
		);
        
}
export default Footer
