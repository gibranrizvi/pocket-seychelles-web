import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import infoStyle from './info-area.styles';

const InfoArea = ({ ...props }) => {
  const { classes, title, description, iconColor, vertical } = props;
  const iconWrapper = `${classes.iconWrapper} ${
    classes[iconColor]
  } ${vertical && classes.icomWrapperVertical}`;

  const iconClasses = `${classes.icom} ${classes.iconVertical}`;

  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default withStyles(infoStyle)(InfoArea);
