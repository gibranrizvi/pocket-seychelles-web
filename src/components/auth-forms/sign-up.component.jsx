import React from 'react';
import clsx from 'clsx';

import {
  createUserProfileDocument,
  FirebaseContext
} from 'firebase/firebase.utils';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';

import Check from '@material-ui/icons/Check';

import { Face, Visibility, VisibilityOff } from '@material-ui/icons';

import GridContainer from 'components/grid/grid-container.component';
import GridItem from 'components/grid/grid-item.component';
import Button from 'components/custom-button/button.component';
import CardBody from 'components/card/card-body.component';
import CardFooter from 'components/card/card-footer.component';
import SocialLogin from 'components/social-login/social-login.component';
import CustomInput from 'components/custom-input/custom-input.component';

const SignUpForm = ({ ...props }) => {
  const { auth } = React.useContext(FirebaseContext);
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    pictureURI: ''
  });
  const [checked, setChecked] = React.useState(false);

  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    pictureURI
  } = values;

  const handleSignUpSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { firstName, lastName });
    } catch (error) {
      console.log(error);
    }

    setValues({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      pictureURI: ''
    });
  };

  return (
    <form onSubmit={handleSignUpSubmit} className={classes.form}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Create a new account</h2>
      </div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={6} lg={6} xl={6}>
          <CardBody>
            <SocialLogin />

            <CustomInput
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              margin="dense"
              fullWidth
              variant="outlined"
              onChange={e => setValues({ ...values, email: e.target.value })}
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
              onChange={e => setValues({ ...values, password: e.target.value })}
              value={password}
              dense
            />

            <CustomInput
              name="confirmPassword"
              type="password"
              label="Confirm"
              placeholder="Confirm Password"
              margin="dense"
              fullWidth
              variant="outlined"
              onChange={e =>
                setValues({ ...values, confirmPassword: e.target.value })
              }
              value={confirmPassword}
              dense
            />
          </CardBody>
        </GridItem>
        <GridItem xs={12} sm={10} md={6} lg={6} xl={6}>
          <CardBody>
            <CustomInput
              name="firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
              margin="dense"
              fullWidth
              variant="outlined"
              onChange={e =>
                setValues({ ...values, firstName: e.target.value })
              }
              value={firstName}
              dense
            />

            <CustomInput
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              margin="dense"
              fullWidth
              variant="outlined"
              onChange={e => setValues({ ...values, lastName: e.target.value })}
              value={lastName}
              dense
            />

            {/* TODO add picture selector */}
          </CardBody>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FormControlLabel
              control={
                <Checkbox
                  tabIndex={-1}
                  onClick={() => setChecked(prevState => !prevState)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />
              }
              classes={{
                label: classes.label,
                root: classes.labelRoot
              }}
              label="I agree to the terms &amp; conditions"
            />
          </div>
          <CardFooter className={classes.cardFooter}>
            <Button type="submit" color="twitter" size="lg" disabled={!checked}>
              Get started
            </Button>
          </CardFooter>
        </GridItem>
      </GridContainer>
    </form>
  );
};

export default SignUpForm;

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
