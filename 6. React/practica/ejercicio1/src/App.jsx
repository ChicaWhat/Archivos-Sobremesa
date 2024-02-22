// Importamos los componentes.
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

// Importamos los estilos.
import './App.css';

// Componente App.
const App = () => {
    // Listado de tweets.
    const tasks = [
      {
          id: 1,
          text: 'Ir a la compra',
          done: false,
      },
      {
          id: 2,
          text: 'Pasear al gato',
          done: true,
      },
      {
          id: 3,
          text: 'Estudiar React',
          done: false,
      },
  ];
  

    return (
        <>
            <Header />
            <Home tasks={tasks} />
            <Footer />
        </>
    );
};

export default App;
