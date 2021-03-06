import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import $ from 'jquery';

const styles = {

    card: {
        maxWidth: 225,
        padding: 8,
        margin: 29,

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9(
    },
};


class Login extends Component {

	classes = {};
	constructor(props) {
		super(props)
		this.state = {
			users: []
        };
        this.login =this.login.bind(this);
    }
    
    login(){
        const email = $("#email").val();
        const password = $("#password").val();
        const request = {"auth":{"email":email,"password":password}};
        $.ajax({
            url: "http://localhost:3000/user_token",
            type: "POST",
            data: request,
            dataType: "json",
            success: function (result) {
              console.log(result)
              localStorage.setItem("jwt", result.jwt)
            }
          })
          $("#email").val("");
          $("#password").val("");
          alert("logged in successfully")
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{ height: "1000px", width: "100%", backgroundImage: `url("http://getwallpapers.com/wallpaper/full/6/c/0/955354-mac-background-pictures-1920x1200-image.jpg")` }}>
                
                <div style={{ display: "flex", justifyContent: 'center', alignItems: 'baseline', margin: 30 }}>
                    <FormControl className={classes.margin} >
                        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
                        <Input
                            id="email"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div style={{ display: "flex",justifyContent: 'center', alignItems: 'baseline', margin: 30 }}>
                    <FormControl className={classes.margin} >
                        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                        <Input
                            id="password"
                            type= "password"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div style={{ display: "flex",justifyContent: 'center', alignItems: 'baseline', margin: 30 }}>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={this.login}>
                        Iniciar Sesion
                    </Button>
                </div>
            </div>
        )


    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);