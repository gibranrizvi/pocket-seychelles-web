import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { container, primaryColor } from 'assets/jss/material-kit-react';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';

// @material-ui/icons
import { Favorite } from '@material-ui/icons';

const Footer = ({ ...props }) => {
  const { whiteFont } = props;

  const classes = useStyles();

  const footerClasses = clsx({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = clsx({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pocket Seychelles
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/about-us"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Who we are
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/discover"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discover Seychelles
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/terms-conditions"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms &amp; Conditions
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, made with{' '}
          <Favorite className={classes.icon} /> by{' '}
          <a
            href="https://www.gibranrizvi.com"
            className={aClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gibran Rizvi
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const useStyles = makeStyles(theme => ({
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block'
  },
  left: {
    float: 'left!important',
    display: 'block'
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important'
  },
  footer: {
    padding: '0.9375rem 0',
    textAlign: 'center',
    display: 'flex',
    zIndex: '2',
    position: 'relative'
  },
  a: {
    color: primaryColor,
    textDecoration: 'none',
    backgroundColor: 'transparent'
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF'
    }
  },
  container,
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0'
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto'
  },
  icon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px'
  }
}));
