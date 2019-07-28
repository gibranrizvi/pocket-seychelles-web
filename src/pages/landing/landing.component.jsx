import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// Core components
import GridContainer from 'components/grid/grid-container.component';
import GridItem from 'components/grid/grid-item.component';
import Button from 'components/custom-button/button.component';
import Parallax from 'components/parallax/parallax.component';
import ProductSection from './sections/product.component';

// Import styles
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';

const LandingPage = ({ classes }) => {
  return (
    <div>
      <Parallax filter image={require('assets/img/bg.jpg')}>
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
      <div className={`${classes.main} ${classes.mainRaised}`}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection />
          <WorkSection /> */}
        </div>
      </div>
    </div>
  );
};

export default withStyles(landingPageStyle)(LandingPage);
