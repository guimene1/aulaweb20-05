import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Bem-vindo à página HOME</h1>
            <span>Guilherme Horodenski Meneghini</span>

            <br/>

            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contato</Link><br/>
            <hr/>
            <Link to="/produto/1">Acessar Produto 1</Link>
            
        </div>
    );
}

export default Home;