import React from 'react';
import clsx from 'clsx';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles/';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';

import { Face, Visibility, VisibilityOff } from '@material-ui/icons';

import customInputStyle from './custom-input.styles';

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
  }
}));
