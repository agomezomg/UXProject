import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import indigo from '@material-ui/core/colors/indigo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextsmsIcon from '@material-ui/icons/Textsms';
import './App.css';
import $ from 'jquery';

const styles = {
  palette: {
    primary: indigo,
    secondary: {
      main: '#8e24aa',
    },
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    maxWidth: 245,
    padding: 16,
    margin: 40,
    minWidth: 200,
  },
  media: {
    height: 140,
  },
};

const classes = {};

class Home extends Component {
  constructor(props) {
    super(props)
    this.classes = props.classes;
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
    console.log(this.state.posts);
    let data = this.state.posts.map((doc,i)=> {
      return(
        <div>
           <Card className={classes.card} key = {i}>
                        <CardHeader
                          avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                              A
                            </Avatar>
                          }
                          action={
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title={doc.title}
                          subheader={doc.theme}
                        />

                        <CardMedia>
                          <img src={doc.photourl} />
                        </CardMedia>
                        <CardContent>
                          <Typography component="p">
                            {doc.description}
                          </Typography>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                          <Button variant="contained" color="secondary" aria-label="Add to favorites">
                            Like
                            <FavoriteIcon className={classes.rightIcon} />
                          </Button>
                          <Button variant="contained" color="secondary" aria-label="Add to favorites">
                            Comment
                              <TextsmsIcon className={classes.rightIcon} />
                          </Button>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                          <CardContent>

                          </CardContent>
                        </Collapse>
                      </Card> 
        </div>
      );
    })

    return (
      <div>
        <div className="text-center" >
          <h2 className="text-center" >Public Posts</h2>
          {data}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

/*
<Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          className={classes.media}
                          height="140"
                          image="../public/rag.jpg"
                          title="Image"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="headline" component="h2">
                            Card
                          </Typography>
                          <Typography component="p">
                            Card Description
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button variant="contained" size="small" color="primary">
                          Share
                        </Button>
                        <Button variant="contained" size="small" color="secondary">
                          Like
                        <FavoriteIcon className={classes.rightIcon} />
                        </Button>
                      </CardActions>
                    </Card>*/

            