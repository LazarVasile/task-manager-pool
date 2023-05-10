import React from "react";
import Logo from "../../assets/images/Logo.svg"
import { TextField } from "@material-ui/core";
import { BiCopyright } from "react-icons/bi";

const Login = ({ classes }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("se face submit");
    }
    
    return (
        <div className={classes.mainPage}>
            <div className={classes.content}>
                <div className={classes.logoContent}>
                    <img className={classes.logo} src={Logo}></img>
                </div>
                <div className={classes.loginContent}>
                    <div className={classes.loginTitle}>
                        Welcome!
                    </div>
                    <div className={classes.loginInfoMessage}>
                        Please fill in your account details to Sign in
                    </div>

                    <form className={classes.submitForm} type="submit" onSubmit={handleSubmit}>
                        <div className={classes.inputsContainer} >
                            <TextField className={classes.inputs}
                                label="Username"
                                InputLabelProps={{className:classes.labelInput}}
                                InputProps={{className:classes.inputProps}}
                            />
                            <TextField className={classes.inputs}
                                label="Password"
                                InputLabelProps={{className:classes.labelInput}}
                                InputProps={{className:classes.inputProps}}
                            />
                        </div>
                        <div className={classes.submitButtonContainer}>
                            <input className={classes.submitButton} type="submit" value="Sign in" />

                        </div>
                    </form>
                    <div className={classes.copyRightContainer}>
                        <div><BiCopyright /></div><div className={classes.copyRightText}>{(new Date().getFullYear())} Vasile Lazar</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;