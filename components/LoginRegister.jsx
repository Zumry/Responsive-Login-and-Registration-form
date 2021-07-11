import React, {Component} from 'react';
import '../styles/LoginRegister.css';

//Images
import Img011 from 'url:../images/LoginRegister/bg1.svg';
import Img022 from 'url:../images/LoginRegister/bg2.svg';
import ImgEmail from 'url:../images/LoginRegister/email.png';
import ImgLock from 'url:../images/LoginRegister/lock.png';
import ImgUser from 'url:../images/LoginRegister/user.png';
import ImgUsers from 'url:../images/LoginRegister/users.png';
import ImgEye from 'url:../images/LoginRegister/eye.png';
import ImgEyeHide from 'url:../images/LoginRegister/eye-hide.png';

/**
 * @author : Zumry Amanullah
 * @portfolio : https://www.zumry.ml
 */

class LoginRegister extends Component {
    constructor(props){
        super(props);

        this.state = {
            isActive:true
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div className={"Login-Section"}>
            <div className={this.state.isActive===true ? "container" : "container sign-up-mode"} id={"container"}>
                <div className={"forms-container"}>
                    <div className={"signin-signup"}>
                        <form className={"sign-in-form"}>
                            <h2 className={"title"}>Sign in</h2>
                            <div className={"input-field"}>
                                <i className={"fas fa-user"}></i>
                                <input type="text" placeholder={"username"} />
                            </div>
                            <div className={"input-field"}>
                                <i className={"fas fa-lock"}></i>
                                <input type="password" placeholder={"Password"} />
                            </div>
                            <input type="submit" value={"Login"} className={"btn solid"} />
                            <p className={"social-text"}> or Sign in with social platforms </p>
                            <div className={"social-media"}>
                                <a href={"#"} className={"social-icon"}>
                                    <i className={"fab fa-facebook-f"}></i>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <i className={"fab fa-twitter"}></i>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <i className={"fab fa-google"}></i>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <i className={"fab fa-linkedin-in"}></i>
                                </a>
                            </div>
                        </form>

                        <form className={"sign-up-form"}>
                            <h2 className={"title"}>Sign up</h2>
                            <div className={"input-field"}>
                                <i className={"fas fa-user"}></i>
                                <input type={"text"} placeholder={"Username"} />
                            </div>
                            <div className={"input-field"}>
                                <i className={"fas fa-envelop"}></i>
                                <input type={"email"} placeholder={"Email"} />
                            </div>
                            <div className={"input-field"}>
                                <i className={"fas fa-lock"}></i>
                                <input type={"password"} placeholder={"password"} />
                            </div>
                            <input type={"submit"} className={"btn"} value={"sign up"} />
                            <p className={"social-media"}>Or Sign up with social platforms</p>
                            <div className={"social-media"}>
                                <a href={"#"} className={"social-icon"}>
                                    <i className={"fab fa-facebook-f"}></i>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <i className={"fab fa-twitter"}></i>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <i className={"fab fa-google"}></i>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <i className={"fab fa-linkedin-in"}></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default LoginRegister;