import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './createPost.css';
import Input from '@material-ui/core/Input';

const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    card: {
        maxWidth: 225,
        padding: 8,
        margin: 29,

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

class createPost extends Component {
    classes = {};
    constructor(props) {
        super(props)
        this.state = {
            age: '',
            open: false,
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };



    render() {
        const { classes } = this.props;

        return (
            <div style={{height:"1200px",width:"1670px", backgroundImage: `url("https://i.pinimg.com/originals/d3/c4/2a/d3c42a5fafa640f90c4c3746f9fb2c22.jpg")` } }>>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', margin: 50 }}>

                    <form autoComplete="off">
                        <Button className={classes.button} onClick={this.handleOpen}>
                            Escoga el tema
                    </Button>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-controlled-open-select">Tipo de Post</InputLabel>
                            <Select
                                open={this.state.open}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                value={this.state.age}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'demo-controlled-open-select',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Comida"}>Comida</MenuItem>
                                <MenuItem value={"Viajes"}>Viajes</MenuItem>
                                <MenuItem value={"Fitness"}>Fitness</MenuItem>
                                <MenuItem value={"Animal"}>Animales</MenuItem>
                                <MenuItem value={"Fashion"}>Fashion</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <TextField
                        alignItems="flex-end"
                        className={classes.margin}
                        id="input-with-icon-textfield"
                        label="Titulo"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10 }}> 
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-simple">Desciption</InputLabel>
                        <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
                    </FormControl>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Crear Post
                    </Button>
                </div>

            </div>


        )


    }
}

createPost.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(createPost);