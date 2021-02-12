import "./SignUp.css";
import img from "../images/pexels-engin-akyurt-1435735.jpg";

export default function SignUp() {
    return (
        <div className="d-flex">
            <section className="auth-sidebar"></section>
            <section className="content">                
                <div className="main"> 
                    <nav className="auth-nav">
                        <p className="auth-link">
                            Already a member?
                            <a href="/session/new">Sign In</a>
                        </p>
                    </nav>                                       
                    <div className="auth-content">
                        <h2>Sign up</h2>                       
                        <form action="#" className="auth-form">
                            <div className="form-field-group">
                                <div className="form-field">
                                    <fieldset>
                                        <label htmlFor="user_first_name">First name</label>
                                        <input type="text" className="text-input" id="user_first_name" name="userFirstNameInput"/>
                                    </fieldset>
                                </div>
                                <div className="form-field">
                                    <fieldset>
                                        <label htmlFor="user_last_name">Last name</label>
                                        <input type="text" className="text-input" id="user_last_name" name="userLastNameInput"/>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="form-field">
                                <fieldset>
                                    <label htmlFor="user_email">Email</label>
                                    <input type="email" className="text-input" id="user_email" name="userEmailInput"/>
                                </fieldset>
                            </div>
                            <div className="form-field">
                                <fieldset>
                                    <label htmlFor="user_password">Password</label>
                                    <input type="password" className="text-input" id="user_password" name="userPasswordInput"/>
                                </fieldset>
                            </div>
                            <button type="submit" className="form-btn">Create Account</button>                                                        
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
