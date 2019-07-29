import React from 'react';
import { withRouter } from 'react-router-dom';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

// React components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, ExitToApp } from '@material-ui/icons';

// Core components
import CustomDropdown from 'components/custom-dropdown/custom-dropdown.component';
import Button from 'components/custom-button/button.component.jsx';

import headerLinksStyle from './header-links.styles';

const HeaderLinks = ({ ...props }) => {
  const { classes, left, history } = props;
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
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          onClick={() => history.push('/sign-in')}
          color="rose"
          target="_blank"
          className={classes.navLink}
        >
          <ExitToApp className={classes.icons} />
          GET STARTED
        </Button>
      </ListItem>
    </List>
  );
};

export default withRouter(withStyles(headerLinksStyle)(HeaderLinks));
