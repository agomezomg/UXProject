import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
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
};

const classes = {};

class Fashion extends Component {
    constructor(props) {
        super(props)
        this.classes = props.classes;
        this.state = {
          spacing: '40',
          posts: []
        }
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
        let data = this.state.posts.map((doc,i)=> {
            if (doc.theme=="Fashion") {
              return(
                <div>
           <Card className={classes.card} key = {i} style={{width:"370px"}}>
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
              )
            }
        });
        const { classes } = this.props;
        return (
            <div style={{ height: "1000px", width: "100%", backgroundImage: `url(" https://lionsheadstudios.com/wp-content/uploads/2016/03/San-Diego-Advertising-Photographers-ASHWORTH_APPAREL_LARGE_08.jpg")` }}>
                <div className="text-center" >
                    <h2 className="text-center" >Public Posts</h2>
                    {data}
                </div>
            </div>
        )


    }
}
Fashion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fashion);