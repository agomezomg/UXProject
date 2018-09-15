import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
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


class Comida extends Component {

    classes = {};
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{height:"1500px",width:"2000px", backgroundImage: `url("https://images.pexels.com/photos/459469/pexels-photo-459469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")` } }>
               
                
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
                          subheader="Comida"
                        />
                        
                        <CardMedia>
                        <img src='http://rocket-pizza.co.uk/media/catalog/product/cache/16/small_image/215x215/170ec19af00183b5e0368529fc2daa2f/m/a/magherita_2_2_46.jpg'/>
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
Comida.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comida);