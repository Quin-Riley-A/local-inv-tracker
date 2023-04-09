import React from "react";
import ReusableForm from "./ReuseableForm";
import PropTypes from "prop-types";

export default function EditTeaForm(props) {
  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: event.target.name.value,
      variety: event.target.variety.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: tea.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {handleEditTeaFormSubmission}
      buttonText = "Update Details" />
    </React.Fragment>
  )
}

EditTeaForm.propTypes = {
  tea: PropTypes.object,
  onEditTea: PropTypes.func
};