import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import cardStyle from './card.styles';

const Card = ({ ...props }) => {
  const { classes, className, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  });
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

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node
};

export default withStyles(cardStyle)(Card);
