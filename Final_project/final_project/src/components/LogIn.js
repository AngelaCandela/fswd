import "./LogIn.css";
import { useHistory } from "react-router-dom";

export default function LogIn() {
    
    let history = useHistory();

    function SignUpButton(e) {
        e.preventDefault();
        history.push("/signup");
    };

    return (
        <div className="d-flex">
            <section className="auth-sidebar login-sidebar"></section>
            <section className="content">
                <nav className="auth-nav">
                    <p>
                        Not a member?
                        <a href="" onClick={SignUpButton}>Sign up now</a>
                    </p>
                </nav>                
                <div className="main">                                                          
                    <div className="auth-content">
                        <h2>Sign in</h2>                       
                        <form action="#" className="auth-form">                            
                            <div className="form-field">
                                <fieldset>
                                    <label htmlFor="user_email">Email Address</label>
                                    <input type="email" className="text-input" id="user_email" name="userEmailInput"/>
                                </fieldset>
                            </div>
                            <div className="form-field">
                                <fieldset>
                                    <label htmlFor="user_password">Password</label>
                                    <input type="password" className="text-input" id="user_password" name="userPasswordInput"/>
                                </fieldset>
                            </div>
                            <button type="submit" className="form-btn">Sign In</button>                                                        
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
