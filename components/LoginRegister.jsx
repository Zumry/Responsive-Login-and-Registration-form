import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedin, faFacebook, faGoogle} from '@fortawesome/fontawesome-free-brands';
import '../styles/LoginRegister.css';

//Images
import Img01 from 'url:../images/LoginRegister/bg1.svg';
import Img02 from 'url:../images/LoginRegister/bg2.svg';
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

    changeSignInForm(){
        this.setState({isActive:false})
    }

    changeSignUpForm(){
        this.setState({isActive:true})
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div>
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
                                    <FontAwesomeIcon icon={ faFacebook }/>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <FontAwesomeIcon icon={ faTwitter }/>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <FontAwesomeIcon icon={ faGoogle }/>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <FontAwesomeIcon icon={ faLinkedin }/>
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
                                    <FontAwesomeIcon icon={ faFacebook }/>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <FontAwesomeIcon icon={ faTwitter }/>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <FontAwesomeIcon icon={ faGoogle }/>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <FontAwesomeIcon icon={ faLinkedin }/>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={"panels-container"}>

                    <div className={"panel left-panel"}>
                        <div className={"content"}>
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className={"btn transparent"} id={"sign-up-btn"} onClick={this.changeSignInForm.bind(this)} >Sign up</button>
                        </div>
                        <img src={Img01} className={"image"} alt={"fb"}/>
                    </div>

                    <div className={"panel right-panel"}>
                        <div className={"content"}>
                            <h3>One of us</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className={"btn transparent"} id={"sign-in-btn"} onClick={this.changeSignUpForm.bind(this)} > Sign in</button>
                        </div>
                        <img src={Img02} className={"image"} alt={"fb"} />
                    </div>

                </div>

            </div>
        </div>
    }
}

export default LoginRegister;