import React from 'react';
import clsx from 'clsx';

import { signInWithGoogle, signInWithFacebook } from 'firebase/firebase.utils';

import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';

import Button from 'components/custom-button/button.component';

const SocialLogin = ({ signIn, googleLoading, facebookLoading }) => {
  const classes = useStyles();

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Button
          onClick={signInWithGoogle}
          variant="contained"
          size="sm"
          color="google"
          className={classes.button}
        >
          <Icon
            className={clsx(
              classes.leftIcon,
              classes.iconSmall,
              'fab fa-google'
            )}
            style={{ marginRight: 16 }}
          />
          {signIn ? 'Continue' : 'Sign up'} with Google
        </Button>
        <Button
          onClick={signInWithFacebook}
          variant="contained"
          size="sm"
          color="facebook"
          className={classes.button}
        >
          <Icon
            className={clsx(
              classes.leftIcon,
              classes.iconSmall,
              'fab fa-facebook-f'
            )}
            style={{ marginRight: 16 }}
          />
          {signIn ? 'Continue' : 'Sign up'} with Facebook
        </Button>
      </div>
      <i className={classes.divider}>- or -</i>
    </div>
  );
};

export default SocialLogin;

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(0.5),
    padding: 8,
    fontSize: 14
  },
  leftIcon: {
    marginRight: theme.spacing(3)
  },
  rightIcon: {
    marginLeft: theme.spacing(3)
  },
  iconSmall: {
    fontSize: 20
  },
  divider: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#777777',
    marginTop: 8,
    marginBottom: 4
  }
}));
