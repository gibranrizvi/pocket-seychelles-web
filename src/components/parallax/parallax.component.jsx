import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import parallaxStyle from './parallax.styles';

const Parallax = props => {
  const { classes, filter, className, children, style, image, small } = props;

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

export default withStyles(parallaxStyle)(Parallax);
