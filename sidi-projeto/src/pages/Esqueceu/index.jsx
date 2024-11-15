import './styles.css'
import { MdEmail } from "react-icons/md";


const ForgotPassaword = () => {
    
    return (
        <div className="container-forgot">
            <div className='container-image'></div>
            <div className="container-form-forgot">
            <img src='/imagens/Logo login-cadastro.svg'/>
                <div className="header-title">
                    <h1>Esqueceu sua senha?</h1>
                    <p className="#">Nos diga seu e-mail para podermos enviar um link para recuperar sua senha.</p>
                </div>

                <form>
                    
                    <div className="content-input">
                        <input type="email" placeholder="Email" id="user-text" required />
                        <MdEmail className='icon' />
                    </div>

                    <button className='button' type="submit">Enviar</button>

                </form>
            </div>
        </div>
    );
}

export default ForgotPassaword;
