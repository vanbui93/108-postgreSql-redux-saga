import { FormControl, FormHelperText, InputLabel, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { PropTypes } from 'prop-types';
import React from 'react';
import styles from "./styles";

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

renderFromHelper.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.bool
};

const renderSelectField = ({ classes, input, label, meta: { touched, error }, children, ...custom }) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: 'age',
        id: 'age-native-simple'
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

renderSelectField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  children: PropTypes.array,
  classes: PropTypes.object,
};

export default withStyles(styles)(renderSelectField);
