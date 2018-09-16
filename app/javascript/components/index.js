import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Toolbar, Typography } from '../../../node_modules/@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Comida from './Comida';
import Viajes from './Viajes';
import Fitness from './Fitness';
import Fashion from './Fashion';
import Animales from './Animales';
import createPost from './createPost';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

};



function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                authed === true ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{ pathname: '/login', state: { from: props.location } }}
                        />
                    )}
        />
    );
}

function PublicRoute({ component: Component, authed, ...rest }) {
    console.log('resd: ', { ...rest })
    return (
        <Route
            {...rest}
            render={props =>
                authed === false ? (
                    <Component {...props} />
                ) : (
                        <Redirect to="/dashboard" />
                    )}
        />
    );
}

class App extends Component {
    classes = {}
    constructor(props) {
        super(props);
        this.classes = this.props.classes;
    }

    state = {
        authed: false,
        loading: true
    };

    componentWillUnmount() {
        this.removeListener();
    }

    render() {
        const authButtons = this.state.authed ? (
            <Button
                label="Logout"
                onClick={() => {

                }}
                style={{ color: '#fff' }}
            >Logout</Button>
        ) : (
                <span>
                    <Link to="/login">
                        <Button style={{ color: 'Secondary' }} >Login</Button>
                    </Link>
                </span>
            );

        const topbarButtons = (
            <div>
                <Link to="/" color="inherit">
                    <Button style={{ color: 'primary' }}>Home</Button>
                </Link>
                <Link to="/Comida">
                    <Button style={{ color: 'primary' }} >Comida</Button>
                </Link>
                <Link to="/Viajes">
                    <Button style={{ color: 'primary' }} >Viajes</Button>
                </Link>
                <Link to="/Fitness">
                    <Button style={{ color: 'primary' }} >Fitness</Button>
                </Link>
                <Link to="/Fashion">
                    <Button style={{ color: 'primary' }} >Fashion</Button>
                </Link>
                <Link to="/Animales">
                    <Button style={{ color: 'primary' }} >Animales</Button>
                </Link>
                <Link to="/createPost">
                    <Button style={{ color: 'primary' }} >Create Post</Button>
                </Link>

                {authButtons}
            </div>
        );
        return (
            <div className={this.classes.root}>
                {console.log("hi")}
                <AppBar position="static" color="default" style={{ position: 'fixed', top: 0 , left : 0,  margin: 0}}>
                    <Toolbar>
                        
                        {topbarButtons}
                    </Toolbar>

                </AppBar>
                <br />
                <br />
                <div className="container-fluid justify-content-center d-flex mt-12">
                    <div >
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <PublicRoute
                                authed={this.state.authed}
                                path="/Viajes"
                                component={Viajes}
                            />
                            <PublicRoute
                                authed={this.state.authed}
                                path="/Fitness"
                                component={Fitness}
                            />
                            <PublicRoute
                                authed={this.state.authed}
                                path="/Comida"
                                component={Comida}
                            />
                            <PublicRoute
                                authed={this.state.authed}
                                path="/Fashion"
                                component={Fashion}
                            />
                            <PublicRoute
                                authed={this.state.authed}
                                path="/Animales"
                                component={Animales}
                            />
                            <PublicRoute
                                authed={this.state.authed}
                                path="/login"
                                component={Login}
                            />
                            <PublicRoute
                                authed={this.state.authed}
                                path="/createPost"
                                component={createPost}
                            />
                            <Route render={() => <h3>No aaaa Match</h3>} />
                        </Switch>
                    </div>
                </div>
            </div>

        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);