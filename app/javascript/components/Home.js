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


class Home extends Component {
  classes = {};
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
      url: "http://localhost:3000/posts",
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('Authorization', token)},
      context: this, // Allows us to use this.setState inside success
      success: function (result) {
        console.log(result)
        this.setState({posts: JSON.stringify(result)})
      }
    })
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    return (
      <div className={classes.root} style={{ height: "1000px", width: "100%", backgroundImage: `url("https://bruceellingson.com/wallpaper/goose/goose1920x1200.jpg")` }}>
        <div>
          <div>
            <Grid container className={classes.root} spacing={20}>
              <Grid item xs={12}>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                  {[0, 1, 2, 3].map(value => (
                    <Grid key={value} item>
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
                          title="Title"
                          subheader="Categoria"
                        />

                        <CardMedia>
                          <img src='https://pbs.twimg.com/profile_images/784171046035488768/fSF_FXpz_400x400.jpg' />
                        </CardMedia>
                        <CardContent>
                          <Typography component="p">
                            Description del post
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
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
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