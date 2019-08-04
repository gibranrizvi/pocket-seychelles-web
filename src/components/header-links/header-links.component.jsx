import React from 'react';
import clsx from 'clsx';

import { defaultFont } from 'assets/jss/material-kit-react';
import tooltip from 'assets/jss/material-kit-react/tooltipsStyle';
import image from 'assets/jss/material-kit-react/imagesStyles';

// React components for routing our app without refresh
import { Link, withRouter } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core';
import { List, ListItem, Tooltip, Hidden } from '@material-ui/core';

// @material-ui/icons
import { ExitToApp } from '@material-ui/icons';

// Core components
import CustomDropdown from 'components/custom-dropdown/custom-dropdown.component';
import Button from 'components/custom-button/button.component';

import profileImage from 'assets/img/faces/avatar.jpg';

import { FirebaseContext } from 'firebase/firebase.utils';

const HeaderLinks = ({ ...props }) => {
  const { auth, currentUser } = React.useContext(FirebaseContext);

  const { left, history } = props;

  const classes = useStyles();

  return left ? (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  ) : (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          onClick={() => history.push('/discover')}
          color="transparent"
          className={classes.navLink}
        >
          Discover
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          onClick={() => history.push('/discover')}
          color="transparent"
          className={classes.navLink}
        >
          Experiences
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          onClick={() => history.push('/discover')}
          color="transparent"
          className={classes.navLink}
        >
          Transfers
        </Button>
      </ListItem>

      {currentUser ? (
        <ListItem className={classes.listItem}>
          <Hidden mdUp>
            <Button
              onClick={() => auth.signOut()}
              color="transparent"
              className={classes.navLink}
            >
              Sign out
            </Button>
          </Hidden>
          <Hidden smDown>
            <CustomDropdown
              dropup={false}
              left={true}
              caret={false}
              hoverColor="danger"
              dropdownHeader={
                <h6>
                  {currentUser.first_name} {currentUser.last_name}
                </h6>
              }
              buttonText={
                <img
                  src={
                    currentUser.profile_picture !== 'default'
                      ? currentUser.profile_picture
                      : profileImage
                  }
                  className={clsx(
                    classes.avatar,
                    classes.imgRounded,
                    classes.imgRaised
                  )}
                  alt="avatar"
                />
              }
              buttonProps={{
                className: clsx(classes.navLink, classes.imageDropdownButton),
                color: 'transparent'
              }}
              dropdownList={[
                'Profile',
                'Settings',
                <div onClick={() => auth.signOut()}>Sign out</div>
              ]}
            />
          </Hidden>
        </ListItem>
      ) : (
        <ListItem className={classes.listItem}>
          <Button
            onClick={() => history.push('/sign-in')}
            color="transparent"
            className={classes.navLink}
          >
            <ExitToApp className={classes.icons} />
            Get started
          </Button>
        </ListItem>
      )}
    </List>
  );
};

export default withRouter(HeaderLinks);

const useStyles = makeStyles(theme => ({
  list: {
    ...defaultFont,
    fontSize: '14px',
    margin: 0,
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'inherit'
  },
  listItem: {
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
    width: 'auto',
    marginLeft: 2,
    marginRight: 2,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 30px)',
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        backgroundColor: '#e5e5e5'
      }
    }
  },
  listItemText: {
    padding: '0 !important'
  },
  navLink: {
    color: 'inherit',
    position: 'relative',
    padding: '0.9375rem',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'rgba(200, 200, 200, 0.2)'
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: '15px',
      marginBottom: '8px',
      marginTop: '8px',
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'center'
      }
    }
  },
  notificationNavLink: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    top: '4px'
  },
  registerNavLink: {
    top: '3px',
    position: 'relative',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex'
  },
  navLinkActive: {
    color: 'inherit',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  icons: {
    width: '20px',
    height: '20px',
    marginRight: '3px'
  },
  socialIcons: {
    position: 'relative',
    fontSize: '20px !important',
    marginRight: '4px'
  },
  dropdownLink: {
    '&,&:hover,&:focus': {
      color: 'inherit',
      textDecoration: 'none',
      display: 'block',
      padding: '10px 20px'
    }
  },
  ...tooltip,
  ...image,
  marginRight5: {
    marginRight: '5px'
  },
  avatar: {
    width: '40px',
    height: '40px'
  },
  imageDropdownButton: {
    padding: '0px',
    top: '4px',
    borderRadius: '50%',
    marginLeft: '5px'
  }
}));
