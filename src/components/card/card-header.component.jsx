import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import cardHeaderStyle from './card-header.styles';

function CardHeader({ ...props }) {
  const { classes, className, children, color, plain, ...rest } = props;

  return (
    <div
      className={`${classes.cardHeader} ${color &&
        classes[color + 'CardHeader']} ${plain &&
        classes.cardHeaderPlain} ${className && className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default withStyles(cardHeaderStyle)(CardHeader);
