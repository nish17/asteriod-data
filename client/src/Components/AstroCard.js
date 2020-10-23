import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: '5%',
      padding: '2%',
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
    },
  })
);

export default function AstroCard({ data }) {
  const classes = useStyles();

  const {
    id,
    name,
    nasa_jpl_url,
    is_potentially_hazardous_asteroid,
    estimated_diameter,
    isMarked
  } = data;
  const { feet } = estimated_diameter;
  const avg_diameter =
    (feet.estimated_diameter_min + feet.estimated_diameter_max) / 2;

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
          {isMarked? <FavoriteIcon />: <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
