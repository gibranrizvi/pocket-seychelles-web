import React from './node_modules/react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import badgeStyle from './badge.styles';

const Badge = ({ ...props }) => {
  const { classes, color, children } = props;
  return (
    <span className={classes.badge + ' ' + classes[color]}>{children}</span>
  );
};

export default withStyles(badgeStyle)(Badge);
