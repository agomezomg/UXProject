import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import $ from 'jquery';

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
    button: {
        spacing: 29,
    },
}; 

class Viajes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          spacing: '40',
          posts: []
        };
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        console.log("getting posts...");
        this.getPosts();
    }

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    getPosts() {
        let token = "Bearer " + localStorage.getItem("jwt")
        console.log(token)
        $.ajax({
            url: "http://localhost:3000/posts.json",
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('Authorization', token)},
            context: this, // Allows us to use this.setState inside success
            success: function (result) {
            console.log(JSON.stringify(result))
            this.setState({posts: result})
            }
        })
    }

    render() {
        const { classes } = this.props;
        let data = this.state.posts.map((doc,i)=> {
            if (doc.theme=="Viajes") {
              return (
                <br/>
                //card contents go here
            )
          }
        });
        return (
            <div style={{height:"1300px",width:"2000px", backgroundImage: `url("https://www.momentier.com/wp-content/uploads/2017/11/MUST-HAVE-GEARS-FOR-TRAVEL-PHOTOGRAPHY-OR-VIDEOGRAPHY%E2%80%93-SHOOT-LIKE-A-PRO.jpeg")` } }>
               
                
                <Card className={classes.card}>
                        <CardHeader
                          avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                              R
                            </Avatar>
                          }
                          action={
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="Card"
                          subheader="Viajes"
                        />
                        
                        <CardMedia>
                        <img src='data:image/jpeg;base64,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'/>
                        </CardMedia>
                        <CardContent>
                          <Typography component="p">
                            Description del post 
                          </Typography>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                          <Button variant="contained" color = "secondary" aria-label="Add to favorites">
                              Like
                            <FavoriteIcon className={classes.rightIcon} />
                          </Button>
                          <Button variant="contained" color = "secondary" aria-label="Add to favorites">
                              Comment
                              <TextsmsIcon className={classes.rightIcon} />
                          </Button>
                        </CardActions>
                      </Card>
                
               
            </div>
        )


    }
}

Viajes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Viajes);