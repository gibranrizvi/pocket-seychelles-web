import React from 'react';

import { FirebaseContext } from '../../firebase/firebase.utils';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/footer/footer.component';
import GridContainer from 'components/grid/grid-container.component';
import GridItem from 'components/grid/grid-item.component';
import Button from 'components/custom-button/button.component';
import Card from 'components/card/card.component';

import authPageStyle from './auth.styles';

import image from 'assets/img/bg.jpg';

import SignInForm from 'components/auth-forms/sign-in.component';
import SignUpForm from 'components/auth-forms/sign-up.component';

const AuthPage = ({ classes, ...props }) => {
  const { currentUser } = React.useContext(FirebaseContext);

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

export default withStyles(authPageStyle)(AuthPage);
