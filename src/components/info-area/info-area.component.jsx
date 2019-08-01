import React from 'react';
import clsx from 'clsx';

import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from 'assets/jss/material-kit-react.jsx';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

const InfoArea = ({ ...props }) => {
  const { title, description, iconColor, vertical } = props;

  const classes = useStyles();

  const iconWrapper = clsx({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = clsx({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });

  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default InfoArea;

const useStyles = makeStyles(theme => ({
  infoArea: {
    maxWidth: '360px',
    margin: '0 auto',
    padding: '0px'
  },
  iconWrapper: {
    float: 'left',
    marginTop: '24px',
    marginRight: '10px'
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  icon: {
    width: '36px',
    height: '36px'
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: 'hidden'
  },
  title,
  description: {
    color: grayColor,
    overflow: 'hidden',
    marginTop: '0px',
    fontSize: '14px'
  },
  iconWrapperVertical: {
    float: 'none'
  },
  iconVertical: {
    width: '61px',
    height: '61px'
  }
}));
