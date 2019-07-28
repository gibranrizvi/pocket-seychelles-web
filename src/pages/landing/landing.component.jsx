import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// Core components
// import Header from 'components/Header/Header.jsx';
// import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/custom-button/button.component.jsx';
// import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';

// Import styles
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';

const LandingPage = ({ classes }) => {
  return (
    <div>
      <Parallax filter image={require('assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                We'll help you make the most of your adventure in the
                Seychelles.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Get Started
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer /> */}
    </div>
  );
};

export default withStyles(landingPageStyle)(LandingPage);
