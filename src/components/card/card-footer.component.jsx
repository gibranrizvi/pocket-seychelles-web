import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import cardFooterStyle from './card-footer.styles';

const CardFooter = ({ ...props }) => {
  const { classes, className, children, ...rest } = props;

  return (
    <div className={classes.cardFooter} {...rest}>
      {children}
    </div>
  );
};

export default withStyles(cardFooterStyle)(CardFooter);
