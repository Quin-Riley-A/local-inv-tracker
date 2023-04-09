import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from "./ReuseableForm";

export default function NewTeaForm(props) {
  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      variety: event.target.variety.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleNewTeaFormSubmission}
        buttonText = "Add new Tea to Inventory" />
    </React.Fragment>
  );
}

NewTeaForm.PropTypes = {
  onNewTeaCreation: PropTypes.func
};