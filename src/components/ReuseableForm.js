import React from 'react';
import PropTypes from "prop-types";

export default function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type = 'text'
          name = 'name'
          placeholder='Tea Name' />
        <input 
        type = 'text'
        name = 'variety'
        placeholder= 'Variety of Tea' />
        <textarea
          name = 'description'
          placeholder='Tea Description' />
        <input
          type = 'text'
          name = 'quantity'
          placeholder='Tea Quantity (in lbs)' />
        <button type = 'submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.PropTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}