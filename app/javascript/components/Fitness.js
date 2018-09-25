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

const classes = {};

class Fitness extends Component {
  constructor(props) {
    super(props)
    this.classes = props.classes;
    this.state = {
      posts: []
    }
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    console.log("getting posts...");
    //this.getPosts();
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
      
        return (
            <div style={{height:"1500px",width:"2000px", backgroundImage: `url("https://stepintomyshoes.files.wordpress.com/2010/10/freework.jpg")` } }>
               
                
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
                          subheader="Fitness"
                        />
                        
                        <CardMedia>
                        <img src='https://i2.wp.com/thefitnessgeneration.com/wp-content/uploads/2016/02/BenK2-2.jpg?resize=215%2C215'/>
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

Fitness.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fitness);