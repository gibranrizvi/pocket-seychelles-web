import React from 'react';
import clsx from 'clsx';

import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader
} from 'assets/jss/material-kit-react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

const CardHeader = ({ ...props }) => {
  const { className, children, color, plain, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.cardHeader]: true,
        [classes[color + 'CardHeader']]: color,
        [classes.cardHeaderPlain]: plain,
        [className]: className !== undefined
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardHeader;

const useStyles = makeStyles(theme => ({
  cardHeader: {
    borderRadius: '3px',
    padding: '1rem 15px',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '-30px',
    border: '0',
    marginBottom: '0'
  },
  cardHeaderPlain: {
    marginLeft: '0px',
    marginRight: '0px'
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader
}));
