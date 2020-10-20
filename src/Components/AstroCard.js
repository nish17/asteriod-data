import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  })
);

export default function AstroCard({ data }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const {
    id,
    name,
    nasa_jpl_url,
    is_potentially_hazardous_asteroid,
    estimated_diameter,
  } = data;
  const { feet } = estimated_diameter;
  const avg_diameter =
    (feet.estimated_diameter_min + feet.estimated_diameter_max) / 2;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <a href={nasa_jpl_url} target='_blank' rel='noopener noreferrer'>
        <CardHeader title={name} subheader={id} />
      </a>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          Hazardous:{' '}
          <IconButton>
            {is_potentially_hazardous_asteroid ? <ClearIcon /> : <DoneIcon />}
          </IconButton>
          Avg size: {Math.round((avg_diameter + Number.EPSILON) * 100) / 100} ft
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
}
