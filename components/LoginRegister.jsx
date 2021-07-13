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
            isActive:true,
            isPasswordShown: false,
            isEyeImage: true,
            isOnClicked: true,
            password:'',
            username:'',
            email:''
        }
    }

    changeSignInForm(){
        this.setState({isActive:false})
    }

    changeSignUpForm(){
        this.setState({isActive:true})
    }

    PasswordVisibility(){
        this.setState({isPasswordShown:true});
        this.setState({isEyeImage:false});
        this.setState({isOnClicked:false})
    };

    PasswordNotVisibility(){
        this.setState({isPasswordShown:false});
        this.setState({isEyeImage:true});
        this.setState({isOnClicked:true})
    };

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return (
            <div className={"Login-Section"}>
                <div className={this.state.isActive===true ? "login-container" : "login-container sign-up-mode"} id={"container"}>
                    <div className={"forms-container"}>
                        <div className={"signin-signup"}>

                    {/* ----------------------------- Login Form ----------------------------- */}
                            <form className={"sign-in-form"}>
                                <h2 className={"title"}>Sign in</h2>
                                <div className={"input-field"}>
                                    <img src={ImgUser} className={"fas"}/>
                                    <input type="text" name={"username"} id={"username"} value={this.state.username}
                                           placeholder={"username"} onChange={event => this.onChange(event)} />
                                </div>
                                <div className={"input-field"}>
                                    <img src={ImgLock} className={"fas"}/>
                                    <input
                                        type={this.state.isPasswordShown===false ? "password" : "text"}
                                        name={'password'} id={'password'} value={this.state.password} placeholder={"Password"}
                                        onChange={event => this.onChange(event)}
                                    />
                                    <img
                                        src={this.state.isEyeImage===true ? ImgEye : ImgEyeHide}
                                        className={"eye"}
                                        onClick={this.state.isOnClicked===true ? this.PasswordVisibility.bind(this) : this.PasswordNotVisibility.bind(this)}
                                    />
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

                {/* ----------------------------- Registration Form ----------------------------- */}
                            <form className={"sign-up-form"}>
                                <h2 className={"title"}>Sign up</h2>
                                <div className={"input-field"}>
                                    <img src={ImgUsers} className={"fas"}/>
                                    <input type="text" name={"username"} id={"username"} value={this.state.username}
                                           placeholder={"username"} onChange={event => this.onChange(event)} />
                                </div>
                                <div className={"input-field"}>
                                    <img src={ImgEmail} className={"fas"}/>
                                    <input type={"email"} name={"email"} id={"email"} value={this.state.email}
                                           placeholder={"Email"} onChange={event => this.onChange(event)} />
                                </div>
                                <div className={"input-field"}>
                                    <img src={ImgLock} className={"fas"}/>
                                    <input
                                        type={this.state.isPasswordShown===false ? "password" : "text"}
                                        name={'password'} id={'password'} value={this.state.password} placeholder={"Password"}
                                        onChange={event => this.onChange(event)}
                                    />
                                    <img
                                        src={this.state.isEyeImage===true ? ImgEye : ImgEyeHide}
                                        className={"eye"}
                                        onClick={this.state.isOnClicked===true ? this.PasswordVisibility.bind(this) : this.PasswordNotVisibility.bind(this)}
                                    />
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
            {/* ------------ Registration Form  end ------------ */}

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
        );
    }
}

export default LoginRegister;