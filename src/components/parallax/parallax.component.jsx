import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

const Parallax = ({ filter, className, children, style, image, small }) => {
  const classes = useStyles();

  let windowScrollTop = window.pageYOffset / 3;

  const [transform, setTransform] = React.useState(
    'translate3d(0,' + windowScrollTop + 'px,0)'
  );

  React.useEffect(() => {
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
    window.addEventListener('scroll', resetTransform);

    return () => {
      window.removeEventListener('scroll', resetTransform);
    };
  }, []);

  const resetTransform = () => {
    windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
  };

  const parallaxClasses = `${classes.parallax} ${filter &&
    classes.filter} ${small && classes.small} ${className && className}`;

  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: 'url(' + image + ')',
        transform
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;

const useStyles = makeStyles(theme => ({
  parallax: {
    height: '90vh',
    maxHeight: '1000px',
    overflow: 'hidden',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center'
  },
  filter: {
    '&:before': {
      background: 'rgba(0, 0, 0, 0.5)'
    },
    '&:after,&:before': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''"
    }
  },
  small: {
    height: '380px'
  }
}));
