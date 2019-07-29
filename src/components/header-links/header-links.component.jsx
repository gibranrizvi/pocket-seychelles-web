import React from 'react';

// React components for routing our app without refresh
import { Link, withRouter } from 'react-router-dom';

// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Tooltip } from '@material-ui/core';

// @material-ui/icons
import { Apps, ExitToApp } from '@material-ui/icons';

// Core components
import CustomDropdown from 'components/custom-dropdown/custom-dropdown.component';
import Button from 'components/custom-button/button.component.jsx';

import profileImage from 'assets/img/faces/avatar.jpg';

import headerLinksStyle from './header-links.styles';
import { FirebaseContext } from 'firebase/firebase.utils';

const HeaderLinks = ({ ...props }) => {
  const { auth } = React.useContext(FirebaseContext);

  const { classes, left, history, currentUser } = props;
  return left ? (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          onClick={() => history.push('/discover')}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Discover
        </Button>
      </ListItem>

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
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>
          ]}
        />
      </ListItem>

      {currentUser ? (
        <ListItem className={classes.listItem}>
          <CustomDropdown
            left
            caret={false}
            hoverColor="black"
            dropdownHeader={currentUser.displayName}
            buttonText={
              <img src={profileImage} className={classes.img} alt="profile" />
            }
            buttonProps={{
              className: `${classes.navLink} ${classes.imageDropdownButton}`,
              color: 'transparent'
            }}
            dropdownList={[
              'Profile',
              'Settings',
              <Button
                onClick={() => {
                  history.push('/sign-in');
                  auth.signOut();
                }}
                color="transparent"
                size="sm"
                simple
              >
                Sign out
              </Button>
            ]}
          />
        </ListItem>
      ) : (
        <ListItem className={classes.listItem}>
          <Button
            onClick={() => history.push('/sign-in')}
            color="twitter"
            target="_blank"
            className={classes.registerNavLink}
          >
            <ExitToApp className={classes.icons} />
            Get started
          </Button>
        </ListItem>
      )}
    </List>
  );
};

export default withRouter(withStyles(headerLinksStyle)(HeaderLinks));
