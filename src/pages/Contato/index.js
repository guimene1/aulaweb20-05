import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Página Contato</h1>
            <span>Campo Real</span>

            <br/>

            <Link to="/home">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>
            <hr/>
            <Link to="/produto/1">Acessar Produto 1</Link>
           
        </div>
    );
}

export default Contato;