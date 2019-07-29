import React from 'react';

import {
  createUserProfileDocument,
  FirebaseContext
} from '../../firebase/firebase.utils';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// @material-ui/icons
import Face from '@material-ui/icons/FaceRounded';
import Lock from '@material-ui/icons/Lock';
import Check from '@material-ui/icons/Check';

// core components
import Footer from 'components/footer/footer.component';
import GridContainer from 'components/grid/grid-container.component';
import GridItem from 'components/grid/grid-item.component';
import Button from 'components/custom-button/button.component';
import Card from 'components/card/card.component';
import CardBody from 'components/card/card-body.component';
import CardHeader from 'components/card/card-header.component';
import CardFooter from 'components/card/card-footer.component';
import CustomInput from 'components/custom-input/custom-input.component';

import authPageStyle from './auth.styles';

import image from 'assets/img/bg.jpg';

const AuthPage = ({ classes, ...props }) => {
  const { currentUser, auth } = React.useContext(FirebaseContext);

  const [cardAnimation, setCardAnimation] = React.useState('cardHidden');
  const [showLoginForm, setShowLoginForm] = React.useState(true);
  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [firstName, setFirstname] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [pictureURI, setPictureURI] = React.useState('');

  const { history } = props;

  React.useEffect(() => {
    if (currentUser) {
      return history.push('/');
    }

    setTimeout(() => {
      setCardAnimation('');
    }, 200);
    return () => {};
  }, [currentUser, history]);

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

  const handleSignUpSubmit = event => {
    event.preventDefault();

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFirstname('');
    setLastName('');
    setPictureURI('');
  };

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <div className={classes.container}>
        <GridContainer justify="center">
          {showLoginForm ? (
            <GridItem xs={10} sm={8} md={6} lg={4}>
              <Card className={classes[cardAnimation]}>
                <form onSubmit={handleSignInSubmit} className={classes.form}>
                  <CardHeader color="rose" className={classes.cardHeader}>
                    <h3>Sign in to get started</h3>
                  </CardHeader>

                  <CardBody>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <Button
                        color="google"
                        size="sm"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={'fab fa-google'} />
                        <span
                          style={{
                            fontSize: 14,
                            paddingTop: 2,
                            marginLeft: 12
                          }}
                        >
                          Continue with Google
                        </span>
                      </Button>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <Button
                        color="facebook"
                        size="sm"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={'fab fa-facebook-f'} />
                        <span
                          style={{
                            fontSize: 14,
                            paddingTop: 2,
                            marginLeft: 12
                          }}
                        >
                          Continue with Facebook
                        </span>
                      </Button>
                    </div>
                    <i
                      style={{ display: 'flex', justifyContent: 'center' }}
                      className={classes.divider}
                    >
                      - or -
                    </i>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'email',
                        onChange: event => setEmail(event.target.value),
                        value: email,
                        required: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Face className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'password',
                        onChange: event => setPassword(event.target.value),
                        value: password,
                        required: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: 'off'
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" color="twitter" size="lg">
                      Sign in
                    </Button>
                  </CardFooter>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 16
                    }}
                  >
                    <Button
                      onClick={() => setShowLoginForm(false)}
                      color="transparent"
                      size="sm"
                      simple
                      link
                    >
                      Create an account
                    </Button>
                  </div>
                </form>
              </Card>
            </GridItem>
          ) : (
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <Card className={classes[cardAnimation]}>
                <form onSubmit={handleSignUpSubmit} className={classes.form}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2>Create a new account</h2>
                  </div>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={10} md={6} lg={6} xl={6}>
                      <CardBody>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: 16
                          }}
                        >
                          <Button
                            color="google"
                            size="sm"
                            onClick={e => e.preventDefault()}
                          >
                            <i className={'fab fa-google'} />
                            <span
                              style={{
                                fontSize: 14,
                                paddingTop: 2,
                                marginLeft: 12
                              }}
                            >
                              Sign up with Google
                            </span>
                          </Button>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          <Button
                            color="facebook"
                            size="sm"
                            onClick={e => e.preventDefault()}
                          >
                            <i className={'fab fa-facebook-f'} />
                            <span
                              style={{
                                fontSize: 14,
                                paddingTop: 2,
                                marginLeft: 12
                              }}
                            >
                              Sign up with Facebook
                            </span>
                          </Button>
                        </div>
                        <i
                          style={{ display: 'flex', justifyContent: 'center' }}
                          className={classes.divider}
                        >
                          - or -
                        </i>
                        <CustomInput
                          labelText="Email"
                          id="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: 'email',
                            onChange: event => setEmail(event.target.value),
                            value: email
                          }}
                        />
                        <CustomInput
                          labelText="Password"
                          id="password"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: 'password',
                            onChange: event => setPassword(event.target.value),
                            value: password,
                            autoComplete: 'off'
                          }}
                        />
                        <CustomInput
                          labelText="Confirm Password"
                          id="confirm-password"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: 'password',
                            onChange: event =>
                              setConfirmPassword(event.target.value),
                            value: confirmPassword,
                            autoComplete: 'off'
                          }}
                        />
                      </CardBody>
                    </GridItem>
                    <GridItem xs={12} sm={10} md={6} lg={6} xl={6}>
                      <CardBody>
                        <CustomInput
                          labelText="First Name"
                          id="first-name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: 'text',
                            onChange: event => setFirstname(event.target.value),
                            value: firstName
                          }}
                        />
                        <CustomInput
                          labelText="Last Name"
                          id="last-name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: 'text',
                            onChange: event => setLastName(event.target.value),
                            value: lastName
                          }}
                        />
                        <CustomInput
                          labelText="Choose a picture"
                          id="picture"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: 'text',
                            onChange: event =>
                              setPictureURI(event.target.value),
                            value: pictureURI
                          }}
                        />
                      </CardBody>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              tabIndex={-1}
                              onClick={() =>
                                setChecked(prevState => !prevState)
                              }
                              checkedIcon={
                                <Check className={classes.checkedIcon} />
                              }
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
                        <Button
                          type="submit"
                          color="twitter"
                          size="lg"
                          disabled={!checked}
                        >
                          Get started
                        </Button>
                      </CardFooter>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          marginBottom: 16
                        }}
                      >
                        <Button
                          onClick={() => setShowLoginForm(true)}
                          color="transparent"
                          size="sm"
                          simple
                          link
                          className={classes.divider}
                        >
                          Already have an account?
                        </Button>
                      </div>
                    </GridItem>
                  </GridContainer>
                </form>
              </Card>
            </GridItem>
          )}
        </GridContainer>
      </div>
      <Footer whiteFont />
    </div>
  );
};

export default withStyles(authPageStyle)(AuthPage);
