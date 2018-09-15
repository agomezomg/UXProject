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

class Fashion extends Component {
    classes = {};
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{ height: "1300px", width: "2000px", backgroundImage: `url("https://lionsheadstudios.com/wp-content/uploads/2016/03/San-Diego-Advertising-Photographers-ASHWORTH_APPAREL_LARGE_08.jpg")` }}>


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
                        subheader="Fashion"
                    />

                    <CardMedia style={{width:"215px",height:"215px"}}>
                        <img src='http://s7.favim.com/flow/150829/clothes-fabulous-fashion-girly-Favim.com-3203797.jpg' />
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
Fashion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fashion);