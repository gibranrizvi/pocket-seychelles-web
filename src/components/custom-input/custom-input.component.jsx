import React from 'react';
import clsx from 'clsx';

import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from 'assets/jss/material-kit-react.jsx';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';

import { Visibility, VisibilityOff } from '@material-ui/icons';

const CustomInput = ({
  name,
  type,
  label,
  placeholder,
  margin,
  fullWidth,
  variant,
  onChange,
  value,
  icon,
  dense,
  error,
  white,
  success
}) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  return type === 'password' ? (
    <TextField
      name={name}
      type={showPassword ? 'text' : 'password'}
      label={label}
      placeholder={placeholder}
      margin={margin}
      fullWidth={fullWidth}
      variant={variant}
      onChange={onChange}
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              edge="end"
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(prevState => !prevState)}
              onMouseDown={e => e.preventDefault()}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
      className={clsx({ [classes.textField]: true, [classes.dense]: dense })}
    />
  ) : (
    <TextField
      name={name}
      type={type}
      label={label}
      placeholder={placeholder}
      margin={margin}
      fullWidth={fullWidth}
      variant={variant}
      onChange={onChange}
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              edge="end"
              onClick={() => {}}
              onMouseDown={e => e.preventDefault()}
            >
              {icon}
            </IconButton>
          </InputAdornment>
        )
      }}
      className={clsx({ [classes.textField]: true, [classes.dense]: dense })}
    />
  );
};

export default CustomInput;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  dense: {
    marginTop: theme.spacing(1)
  },
  margin: {
    marginTop: 8
  },
  textField: {
    flexBasis: 200
  },
  disabled: {
    '&:before': {
      borderColor: 'transparent !important'
    }
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#D2D2D2 !important',
      borderWidth: '1px !important'
    },
    '&:after': {
      borderColor: primaryColor
    }
  },
  underlineError: {
    '&:after': {
      borderColor: dangerColor
    }
  },
  underlineSuccess: {
    '&:after': {
      borderColor: successColor
    }
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#FFFFFF'
    },
    '&:after': {
      borderColor: '#FFFFFF'
    }
  },
  labelRoot: {
    ...defaultFont,
    color: '#AAAAAA !important',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.42857',
    top: '10px',
    letterSpacing: 'unset',
    '& + $underline': {
      marginTop: '0px'
    }
  },
  labelRootError: {
    color: dangerColor + ' !important'
  },
  labelRootSuccess: {
    color: successColor + ' !important'
  },
  formControl: {
    margin: '0 0 17px 0',
    paddingTop: '27px',
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: '#495057'
    }
  },
  input: {
    color: '#495057',
    height: 'unset',
    '&,&::placeholder': {
      fontSize: '14px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.42857',
      opacity: '1'
    },
    '&::placeholder': {
      color: '#AAAAAA'
    }
  },
  whiteInput: {
    '&,&::placeholder': {
      color: '#FFFFFF',
      opacity: '1'
    }
  }
}));
