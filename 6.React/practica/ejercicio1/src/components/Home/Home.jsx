// Importamos las prop-types.
import PropTypes from 'prop-types';

// Importamos los estilos.
import './Home.css';

// Componente Home que recibe como prop un array de tweets.
const Home = ({ tasks }) => {
    // Creamos un array de <li> para cada elemento del array de tweets.
    const tasksLi = tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>;
    });

    return (
        <main>
            <h2>Lista de tareas</h2>

            <ul>{tasksLi}</ul>
        </main>
    );
};

// Validamos las props.
Home.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default Home;
