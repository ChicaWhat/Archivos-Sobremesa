// Importamos las prop-types.
import PropTypes from 'prop-types';

// Importamos los estilos.
import './Home.css';

// Componente Home que recibe como prop un array de tweets.
const Home = ({ tweets }) => {
    // Creamos un array de <li> para cada elemento del array de tweets.
    const tweetsLi = tweets.map((tweet) => {
        return <li key={tweet.id}>{tweet.text}</li>;
    });

    return (
        <main>
            <h2>Lista de tweets</h2>

            <ul>{tweetsLi}</ul>
        </main>
    );
};

// Validamos las props.
Home.propTypes = {
    tweets: PropTypes.array.isRequired,
};

export default Home;
