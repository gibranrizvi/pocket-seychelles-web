import React from 'react';
import clsx from 'clsx';

import {
  createUserProfileDocument,
  FirebaseContext
} from 'firebase/firebase.utils';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';

import { Face, Visibility, VisibilityOff } from '@material-ui/icons';

import CustomInput from 'components/custom-input/custom-input.component';
import Button from 'components/custom-button/button.component';
import CardBody from 'components/card/card-body.component';
import CardHeader from 'components/card/card-header.component';
import CardFooter from 'components/card/card-footer.component';
import SocialLogin from 'components/social-login/social-login.component';

const SignInForm = ({ ...props }) => {
  const { auth } = React.useContext(FirebaseContext);
  const classes = useStyles();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignInSubmit = async event => {
    event.preventDefault();

    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      return createUserProfileDocument(user);
    } catch (error) {
      console.log(error.message);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSignInSubmit} className={classes.form}>
      <CardHeader color="rose" className={classes.cardHeader}>
        <h3>Sign in to get started</h3>
      </CardHeader>

      <CardBody>
        <SocialLogin signIn />

        <CustomInput
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          margin="dense"
          fullWidth
          variant="outlined"
          onChange={e => setEmail(e.target.value)}
          value={email}
          icon={<Face />}
          dense
        />

        <CustomInput
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          margin="dense"
          fullWidth
          variant="outlined"
          onChange={e => setPassword(e.target.value)}
          value={password}
          dense
        />
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Button type="submit" color="twitter" size="lg">
          Sign in
        </Button>
      </CardFooter>
    </form>
  );
};

export default SignInForm;

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
  form: {
    margin: '0'
  },
  cardHeader: {
    width: 'auto',
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-40px',
    padding: '20px 0',
    marginBottom: '15px'
  },
  socialIcons: {
    maxWidth: '24px',
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px'
  },
  divider: {
    marginTop: '30px',
    marginBottom: '0px',
    textAlign: 'center'
  },
  cardFooter: {
    paddingTop: '0rem',
    border: '0',
    borderRadius: '6px',
    justifyContent: 'center !important'
  }
}));
