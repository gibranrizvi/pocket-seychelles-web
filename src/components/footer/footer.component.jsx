import React from 'react';

import { List, ListItem, withStyles } from '@material-ui/core';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import footerStyle from './footer.styles';

const Footer = ({ ...props }) => {
  const { classes, whiteFont } = props;

  return (
    <footer
      className={`${classes.footer} ${whiteFont && classes.footerWhiteFont}`}
    >
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.moonpresence.com"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Moon Presence
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=mkr-footer"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{' '}
          <Favorite className={classes.icon} /> by{' '}
          <a
            href="https://www.moonpresence.com"
            className={`${classes.a} ${whiteFont && classes.footerWhiteFont}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Moon Presence
          </a>
        </div>
      </div>
    </footer>
  );
};

export default withStyles(footerStyle)(Footer);
