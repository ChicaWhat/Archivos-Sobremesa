// Importamos los componentes.
import Box from './components/Box';

// Componente App.
const App = () => {
    return (
        <>
            <Box color='lightblue'>
                <h1>Small</h1>
            </Box>
            <Box size='big' color='lightcoral'>
                <h1>Big</h1>
            </Box>
        </>
    );
};

export default App;
