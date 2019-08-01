import React from 'react';

import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor
} from 'assets/jss/material-kit-react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

const Badge = ({ ...props }) => {
  const { color, children } = props;

  const classes = useStyles();
  return (
    <span className={classes.badge + ' ' + classes[color]}>{children}</span>
  );
};

export default Badge;

const useStyles = makeStyles(theme => ({
  badge: {
    marginRight: '3px',
    borderRadius: '12px',
    padding: '5px 12px',
    textTransform: 'uppercase',
    fontSize: '10px',
    fontWeight: '500',
    lineHeight: '1',
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    display: 'inline-block'
  },
  primary: {
    backgroundColor: primaryColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: dangerColor
  },
  success: {
    backgroundColor: successColor
  },
  info: {
    backgroundColor: infoColor
  },
  rose: {
    backgroundColor: roseColor
  },
  gray: {
    backgroundColor: '#6c757d'
  }
}));
