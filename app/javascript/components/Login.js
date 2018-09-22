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

const styles = {

    card: {
        maxWidth: 225,
        padding: 8,
        margin: 29,

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};


class Register extends Component {

	classes = {};
	constructor(props) {
		super(props)
		this.state = {
			users: []
		};
	}

    render() {
        const { classes } = this.props;
        return (
            <div style={{ height: "1000px", width: "100%", backgroundImage: `url("http://getwallpapers.com/wallpaper/full/6/c/0/955354-mac-background-pictures-1920x1200-image.jpg")` }}>
                lol
                lol
                lol
                lol
                <div style={{ display: "flex", justifyContent: 'center', alignItems: 'baseline', margin: 30 }}>
                    <FormControl className={classes.margin} >
                        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
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
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div style={{ display: "flex",justifyContent: 'center', alignItems: 'baseline', margin: 30 }}>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Iniciar Sesion
                    </Button>
                </div>
            </div>
        )


    }
}
Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);