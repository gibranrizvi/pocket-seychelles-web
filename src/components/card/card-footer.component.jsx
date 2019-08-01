import React from 'react';
import clsx from 'clsx';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

const CardFooter = ({ ...props }) => {
  const { className, children, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.cardFooter]: true,
        [className]: className !== undefined
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardFooter;

const useStyles = makeStyles(theme => ({
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: '0.9375rem 1.875rem'
  }
}));
