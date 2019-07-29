import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

// @material-ui/icons
import Face from '@material-ui/icons/FaceRounded';
import People from '@material-ui/icons/People';

// core components
import Header from 'components/header/header.component';
import HeaderLinks from 'components/header-links/header-links.component';
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

const AuthPage = ({ classes, ...rest }) => {
  const [cardAnimation, setCardAnimation] = React.useState('cardHidden');
  const [showLoginForm, setShowLoginForm] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setCardAnimation('');
    }, 200);
    return () => {};
  }, []);

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
                <form className={classes.form}>
                  <CardHeader color="rose" className={classes.cardHeader}>
                    <h3>Sign in and get started</h3>
                  </CardHeader>
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
                  <CardBody>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'email',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Face className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'password',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off'
                      }}
                    />
                    <p
                      onClick={() => setShowLoginForm(false)}
                      className={classes.divider}
                    >
                      Create a new account
                    </p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      SIGN IN
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          ) : (
            <GridItem xs={10} sm={10} md={8} lg={6}>
              <Card className={classes[cardAnimation]}>
                <form className={classes.form}>
                  <CardHeader color="rose" className={classes.cardHeader}>
                    <h3>Create a new account</h3>
                  </CardHeader>
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
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'email',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Face className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'password',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off'
                      }}
                    />
                    <p
                      onClick={() => setShowLoginForm(true)}
                      className={classes.divider}
                    >
                      Already have an account?
                    </p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      SUBMIT
                    </Button>
                  </CardFooter>
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
