import React from './node_modules/react';

// mterial-ui components
import withStyles from './node_modules/@material-ui/core/styles/withStyles';

const style = {
  clearfix: {
    '&:after,&:before': {
      display: 'table',
      content: '" "'
    },
    '&:after': {
      clear: 'both'
    }
  }
};

const Clearfix = ({ ...props }) => {
  const { classes } = props;
  return <div className={classes.clearfix} />;
};

export default withStyles(style)(Clearfix);
