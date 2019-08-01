import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const GridContainer = ({ ...props }) => {
  const { children, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Grid container {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

export default GridContainer;

const useStyles = makeStyles(theme => ({
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto'
  }
}));
