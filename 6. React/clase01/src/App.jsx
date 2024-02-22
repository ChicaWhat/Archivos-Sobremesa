// Importamos los componentes.
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

// Importamos los estilos.
import './App.css';

// Componente App.
const App = () => {
    // Listado de tweets.
    const tweets = [
        {
            id: 1,
            text: 'Hola desde React',
        },
        {
            id: 2,
            text: 'Que empiece ya el descanso...',
        },
        {
            id: 3,
            text: 'Hoy me han robado el bocadillo',
        },
    ];

    return (
        <>
            <Header />
            <Home tweets={tweets} />
            <Footer />
        </>
    );
};

export default App;
