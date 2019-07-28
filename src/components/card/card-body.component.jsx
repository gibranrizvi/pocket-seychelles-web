import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import cardBodyStyle from './card-body.styles';

const CardBody = ({ ...props }) => {
  const { classes, className, children, ...rest } = props;

  return (
    <div className={`${classes.cardBody} ${className && className}`} {...rest}>
      {children}
    </div>
  );
};

export default withStyles(cardBodyStyle)(CardBody);
