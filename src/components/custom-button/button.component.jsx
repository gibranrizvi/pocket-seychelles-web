import React from 'react';

// @material-ui/core components
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

import buttonStyle from './button.styles';

const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle
}));

const RegularButton = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  return (
    <Button
      {...rest}
      ref={ref}
      className={`${classes.button} ${size && classes[size]} ${color &&
        classes[color]} ${round && classes.round} ${fullWidth &&
        classes.fullWidth} ${disabled && classes.disabled} ${simple &&
        classes.simple} ${block && classes.block} ${link &&
        classes.link} ${justIcon && classes.justIcon}`}
    >
      {children}
    </Button>
  );
});

export default RegularButton;
