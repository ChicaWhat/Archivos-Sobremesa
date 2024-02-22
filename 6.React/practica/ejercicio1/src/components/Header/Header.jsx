// Importamos los estilos.
import './Header.css';


// Componente Header.
const Header = () => {
    return (
        <header>
            <h1>{import.meta.env.VITE_TITULO}</h1>
        </header>
    );
};

export default Header;