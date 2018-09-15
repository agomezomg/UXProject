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

class Animales extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div style={{ height: "1300px", width: "2000px", backgroundImage: `url("https://www.dirtiedogphotography.com/wp-content/uploads/2018/01/silhouette1.jpg")` }}>


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
                    subheader="Animales"
                />

                <CardMedia>
                    <img src='data:image/jpeg;base64,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' />
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
            </Card>


        </div>
    )


}
}

Animales.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Animales);