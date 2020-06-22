import React from 'react';
import { TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types';

//Function component, cũng nhận được các props như các tham số
//input có onChange, onBlue,... nên ko cần làm thủ công như trước nữa
const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}  //helperText hiển thị thông báo error
      {...input}
      {...custom}
    />
  );

renderTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
}

export default renderTextField;