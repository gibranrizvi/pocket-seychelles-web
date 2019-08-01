import React from 'react';

import { container } from 'assets/jss/material-kit-react';

import { FirebaseContext } from '../../firebase/firebase.utils';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import Footer from 'components/footer/footer.component';
import GridContainer from 'components/grid/grid-container.component';
import GridItem from 'components/grid/grid-item.component';
import Button from 'components/custom-button/button.component';
import Card from 'components/card/card.component';

import image from 'assets/img/bg.jpg';

import SignInForm from 'components/auth-forms/sign-in.component';
import SignUpForm from 'components/auth-forms/sign-up.component';

const AuthPage = ({ ...props }) => {
  const { currentUser } = React.useContext(FirebaseContext);

  const classes = useStyles();

  const [cardAnimation, setCardAnimation] = React.useState('cardHidden');
  const [showLoginForm, setShowLoginForm] = React.useState(true);

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
                <SignInForm />
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
              </Card>
            </GridItem>
          ) : (
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <Card className={classes[cardAnimation]}>
                <SignUpForm />
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
              </Card>
            </GridItem>
          )}
        </GridContainer>
      </div>
      <Footer whiteFont />
    </div>
  );
};

export default AuthPage;

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    zIndex: '2',
    position: 'relative',
    paddingTop: '20vh',
    color: '#FFFFFF',
    paddingBottom: '200px'
  },
  cardHidden: {
    opacity: '0',
    transform: 'translate3d(0, -60px, 0)'
  },
  pageHeader: {
    minHeight: '100vh',
    height: 'auto',
    display: 'inherit',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    '&:before': {
      background: 'rgba(0, 0, 0, 0.5)'
    },
    '&:before,&:after': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: '""'
    },
    '& footer li a,& footer li a:hover,& footer li a:active': {
      color: '#FFFFFF'
    },
    '& footer': {
      position: 'absolute',
      bottom: '0',
      width: '100%'
    }
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
  socialLine: {
    marginTop: '1rem',
    textAlign: 'center',
    padding: '0'
  },
  inputIconsColor: {
    color: '#495057'
  }
}));
