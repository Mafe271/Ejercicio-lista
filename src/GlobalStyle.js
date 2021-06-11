import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Hind-Ligth.woff'

const GlobalStyle = createGlobalStyle`
.ContainerText{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px;
    font-family: Impact;
    font-size:20px;
}
.ContainerText p{
    font-family: 'Hind';
}

.ContainerImage{
    display: flex;
    width: 50%;
    margin-right: 10px;
    justify-content: center;
}
.ContainerImage img{
    width: 100%;
    height: auto;
}

/*Fuentes*/

@font-face {
    font-family: 'Hind';
    src: local ('Hind'), url (${PrimaryFont}) format('woff')
    font-style: normal;
}
`;

export default GlobalStyle