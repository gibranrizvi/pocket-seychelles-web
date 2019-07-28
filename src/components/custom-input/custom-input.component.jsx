import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import customInputStyle from './custom-input.styles';

function CustomInput({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;

  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = `${classes.formControl} ${formControlProps.className}`;
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={`${classes.labelRoot} ${error &&
            labelRootError} ${success && !error && labelRootSuccess}`}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: `${classes.input} ${white && classes.whiteInput}`,
          root: inputRootCustomClasses && inputRootCustomClasses,
          disabled: classes.disabled,
          underline: `${classes.underline} ${error &&
            classes.underlineError} ${success &&
            !error &&
            classes.underlineSuccess} ${white && classes.whiteUnderline}`
        }}
        id={id}
        {...inputProps}
      />
    </FormControl>
  );
}

export default withStyles(customInputStyle)(CustomInput);
