import React from 'react';

import { container, title } from 'assets/jss/material-kit-react.jsx';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// Core components
import GridContainer from 'components/grid/grid-container.component';
import GridItem from 'components/grid/grid-item.component';
import Button from 'components/custom-button/button.component';
import Parallax from 'components/parallax/parallax.component';
import ProductSection from './sections/product.component';
import TeamSection from './sections/team.component';
import WorkSection from './sections/work.component';
import Footer from 'components/footer/footer.component';

const LandingPage = ({ ...props }) => {
  const classes = useStyles();

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
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    ...container
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0'
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  }
}));
