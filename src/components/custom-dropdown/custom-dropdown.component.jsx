import React from 'react';
import clsx from 'clsx';

import {
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  infoBoxShadow,
  successColor,
  successBoxShadow,
  warningColor,
  warningBoxShadow,
  dangerColor,
  dangerBoxShadow,
  roseColor,
  roseBoxShadow
} from 'assets/jss/material-kit-react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import {
  MenuItem,
  MenuList,
  ClickAwayListener,
  Paper,
  Grow,
  Divider,
  Icon,
  Popper
} from '@material-ui/core';

// core components
import Button from 'components/custom-button/button.component';

const CustomDropdown = ({ ...props }) => {
  const {
    onClick,
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding
  } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prevState => !prevState);
  };

  const handleClose = param => {
    setOpen(false);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const handleCloseAway = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const caretClasses = clsx({
    [classes.caret]: true,
    [classes.caretActive]: open,
    [classes.caretRTL]: rtlActive
  });

  const dropdownItem = clsx({
    [classes.dropdownItem]: true,
    [classes[hoverColor + 'Hover']]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });

  let icon = null;
  switch (typeof buttonIcon) {
    case 'object':
      icon = <props.buttonIcon className={classes.buttonIcon} />;
      break;
    case 'string':
      icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div>
      <div>
        <Button
          aria-label="Profile"
          aria-owns={open ? 'menu-list' : null}
          aria-haspopup="true"
          {...buttonProps}
          buttonRef={node => setAnchorEl(node)}
          onClick={handleClick}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </Button>
      </div>
      <Popper
        open={open}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup ? (left ? 'top-start' : 'top') : left ? 'bottom-end' : 'bottom'
        }
        className={clsx({
          [classes.popperClose]: !open,
          [classes.popperResponsive]: true
        })}
      >
        {() => (
          <Grow
            in={open}
            id="menu-list"
            style={
              dropup
                ? { transformOrigin: '0 100% 0' }
                : { transformOrigin: '0 0 0' }
            }
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className={classes.menuList}>
                  {dropdownHeader !== undefined ? (
                    <MenuItem
                      onClick={() => handleClose(dropdownHeader)}
                      className={classes.dropdownHeader}
                    >
                      {dropdownHeader}
                    </MenuItem>
                  ) : null}
                  {dropdownList.map((prop, key) => {
                    if (prop.divider) {
                      return (
                        <Divider
                          key={key}
                          onClick={() => handleClose('divider')}
                          className={classes.dropdownDividerItem}
                        />
                      );
                    }
                    return (
                      <MenuItem
                        key={key}
                        onClick={() => handleClose(prop)}
                        className={dropdownItem}
                      >
                        {prop}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default CustomDropdown;

const useStyles = makeStyles(theme => ({
  popperClose: {
    pointerEvents: 'none'
  },
  dropdown: {
    borderRadius: '3px',
    border: '0',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
    top: '100%',
    zIndex: '1000',
    minWidth: '160px',
    padding: '5px 0',
    margin: '2px 0 0',
    fontSize: '14px',
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box'
  },
  menuList: {
    padding: '0'
  },
  popperResponsive: {
    zIndex: '1200',
    [theme.breakpoints.down('sm')]: {
      zIndex: '1640',
      position: 'static',
      float: 'none',
      width: 'auto',
      marginTop: '0',
      backgroundColor: 'transparent',
      border: '0',
      boxShadow: 'none',
      color: 'black'
    }
  },
  dropdownItem: {
    ...defaultFont,
    fontSize: '13px',
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '2px',
    position: 'relative',
    transition: 'all 150ms linear',
    display: 'block',
    clear: 'both',
    fontWeight: '400',
    height: 'fit-content',
    color: '#333',
    whiteSpace: 'nowrap',
    minHeight: 'unset'
  },
  blackHover: {
    '&:hover': {
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)',
      backgroundColor: '#212121',
      color: '#fff'
    }
  },
  primaryHover: {
    '&:hover': {
      backgroundColor: primaryColor,
      color: '#FFFFFF',
      ...primaryBoxShadow
    }
  },
  infoHover: {
    '&:hover': {
      backgroundColor: infoColor,
      color: '#FFFFFF',
      ...infoBoxShadow
    }
  },
  successHover: {
    '&:hover': {
      backgroundColor: successColor,
      color: '#FFFFFF',
      ...successBoxShadow
    }
  },
  warningHover: {
    '&:hover': {
      backgroundColor: warningColor,
      color: '#FFFFFF',
      ...warningBoxShadow
    }
  },
  dangerHover: {
    '&:hover': {
      backgroundColor: dangerColor,
      color: '#FFFFFF',
      ...dangerBoxShadow
    }
  },
  roseHover: {
    '&:hover': {
      backgroundColor: roseColor,
      color: '#FFFFFF',
      ...roseBoxShadow
    }
  },
  dropdownDividerItem: {
    margin: '5px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    height: '1px',
    overflow: 'hidden'
  },
  buttonIcon: {
    width: '20px',
    height: '20px'
  },
  caret: {
    transition: 'all 150ms ease-in',
    display: 'inline-block',
    width: '0',
    height: '0',
    marginLeft: '4px',
    verticalAlign: 'middle',
    borderTop: '4px solid',
    borderRight: '4px solid transparent',
    borderLeft: '4px solid transparent'
  },
  caretActive: {
    transform: 'rotate(180deg)'
  },
  dropdownHeader: {
    display: 'block',
    padding: '0.1875rem 1.25rem',
    fontSize: '0.75rem',
    lineHeight: '1.428571',
    color: '#777',
    whiteSpace: 'nowrap',
    fontWeight: 'inherit',
    marginTop: '10px',
    minHeight: 'unset',
    '&:hover,&:focus': {
      backgroundColor: 'transparent',
      cursor: 'auto'
    }
  },
  noLiPadding: {
    padding: '0'
  }
}));
