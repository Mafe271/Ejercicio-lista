import React from 'react'; //Importar siempre react
import '../utils/css/Todo.estilos.css'
import Logo from '../utils/images/images.jpg';

function Todo() {
    return (
        <div className="Container_Cabecera">
            <div className="ContainerText">
            <h1>
                Hola este es el componente de la cabecera
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nesciunt molestiae cum, doloremque recusandae illo a. Sint, fuga quos? Debitis ipsum corrupti consequatur velit ullam enim exercitationem minima id eos.
            Deserunt culpa nobis architecto ratione quae quisquam rem rerum dolorum eveniet ducimus, velit laudantium, laboriosam error delectus? Voluptatibus amet labore autem dicta doloribus tempore recusandae, hic nemo voluptatum exercitationem sint?
            </p>
            </div>
            <div className="ContainerImage">
            <img src={Logo} alt="hola este es Logo"/>
            </div>
        </div>
    )
}

export default Todo