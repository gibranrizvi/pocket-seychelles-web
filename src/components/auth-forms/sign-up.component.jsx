import React from 'react';
import { Link } from 'react-router-dom';

import {
  dangerColor,
  twitterColor,
  successColor
} from 'assets/jss/material-kit-react';

import {
  createUserProfileDocument,
  FirebaseContext
} from 'firebase/firebase.utils';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel, IconButton } from '@material-ui/core';

import {
  Check,
  CheckCircleOutlineRounded,
  AddAPhotoOutlined
} from '@material-ui/icons';

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
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);

  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    pictureURI
  } = values;

  // Function 1: Submit sign up form
  const handleSignUpSubmit = async event => {
    event.preventDefault();
    setSubmitting(true);

    // Form validation
    if (!email) {
      return setErrors({ ...errors, email: 'Email field is required' });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return setErrors({
        ...errors,
        email: 'Please enter a valid email address'
      });
    } else if (!password) {
      return setErrors({
        ...errors,
        email: '',
        password: 'Password field is required'
      });
    } else if (password.length < 8) {
      return setErrors({
        ...errors,
        email: '',
        password: 'Password must be 8 or more characters long'
      });
    } else if (!confirmPassword) {
      return setErrors({
        ...errors,
        password: '',
        confirmPassword: 'Password confirmation is required'
      });
    } else if (password !== confirmPassword) {
      return setErrors({
        ...errors,
        password: '',
        confirmPassword: 'Passwords do not match'
      });
    } else if (!firstName) {
      return setErrors({
        ...errors,
        confirmPassword: '',
        firstName: 'First name field is required'
      });
    } else if (!lastName) {
      return setErrors({
        ...errors,
        firstName: '',
        lastName: 'Last name field is required'
      });
    } else {
      setErrors({});
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { firstName, lastName });
    } catch (error) {
      console.log(error);
      return setErrors({
        email: 'Email already exists'
      });
    }
  };

  return (
    <form onSubmit={handleSignUpSubmit} className={classes.form} noValidate>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Create a new account</h2>
      </div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={6} lg={6} xl={6}>
          <CardBody>
            <SocialLogin />

            <CustomInput
              autoFocus
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              margin="dense"
              fullWidth
              variant="outlined"
              onChange={e => setValues({ ...values, email: e.target.value })}
              value={email}
              dense
              required
              error={!!errors.email}
              errorMessage={errors.email}
              success
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
              onFocus={() => setValues({ ...values, password: '' })}
              dense
              required
              error={!!errors.password}
              errorMessage={errors.password}
              success={password.length >= 8 && password === confirmPassword}
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
              onFocus={() => setValues({ ...values, confirmPassword: '' })}
              dense
              required
              error={!!errors.confirmPassword}
              errorMessage={errors.confirmPassword}
              success={password.length >= 8 && password === confirmPassword}
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
              required
              error={!!errors.firstName}
              errorMessage={errors.firstName}
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
              required
              error={!!errors.lastName}
              errorMessage={errors.lastName}
            />

            {/* TODO add picture selector */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 4,
                marginLeft: -12
              }}
            >
              <input
                accept="image/*"
                id="image"
                type="file"
                className={classes.imageInput}
                onChange={e =>
                  setValues({ ...values, pictureURI: e.target.files[0] })
                }
              />
              <label htmlFor="image">
                <IconButton aria-label="upload picture" component="span">
                  {pictureURI ? (
                    <Check className={classes.uploadedCheckIcon} />
                  ) : (
                    <AddAPhotoOutlined className={classes.uploadImageIcon} />
                  )}
                </IconButton>
              </label>
              <p style={{ marginLeft: 4, marginTop: 10 }}>
                Upload a profile picture (optional)
              </p>
            </div>
          </CardBody>
          <div className={classes.termsAndConditionsBlock}>
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
            />
            <h6 className={classes.termsAndConditionsText}>
              I agree to the{' '}
              <Link
                to="/terms-conditions"
                className={classes.termsAndConditionsLink}
              >
                terms &amp; conditions
              </Link>
            </h6>
          </div>
          <CardFooter className={classes.cardFooter}>
            <Button type="submit" color="danger" size="md" disabled={!checked}>
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
  },
  termsAndConditionsBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  termsAndConditionsText: { paddingLeft: 0, marginLeft: -14, color: 'grey' },
  termsAndConditionsLink: {
    color: dangerColor,
    '&:hover': {
      color: dangerColor,
      textDecoration: 'underline'
    }
  },
  imageInput: { display: 'none' },
  checkedIcon: { color: dangerColor },
  uploadImageIcon: { color: twitterColor },
  uploadedCheckIcon: { color: successColor }
}));
