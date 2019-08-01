import React from 'react';
import clsx from 'clsx';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

const CardBody = ({ ...props }) => {
  const { className, children, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.cardBody]: true,
        [className]: className !== undefined
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardBody;

const useStyles = makeStyles(theme => ({
  cardBody: {
    padding: '0.9375rem 1.875rem',
    flex: '1 1 auto'
  }
}));
