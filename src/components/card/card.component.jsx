import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import cardStyle from './card.styles';

const Card = ({ ...props }) => {
  const { classes, className, children, plain, carousel, ...rest } = props;

  return (
    <div
      className={`${classes.card} ${plain && classes.cardPlain} ${carousel &&
        classes.cardCarousel} ${className && className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default withStyles(cardStyle)(Card);
