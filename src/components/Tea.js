import React from "react";
import PropTypes from "prop-types";

export default function Tea(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>{props.variety}</h5>
        <h5>Quantity: {props.quantity} lbs</h5>
      </div>
    </React.Fragment>
  );
}


Tea.propTypes = {
  name: PropTypes.string.isRequired,
  variety: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};