import React from "react";
import PropTypes from "prop-types";

export default function TeaDetail(props) {
  const { tea, onClickingDelete, onClickingEdit } = props;

    return (
      <React.Fragment>
        <h2>Tea Details</h2>
        <h3>Name: {tea.name}</h3>
        <h5>${tea.variety}</h5>
        <h5>{tea.quantity} lbs in stock</h5>
        <p>{tea.description}</p>
        <button onClick ={onClickingEdit}>Update Tea Details</button>
        <button onClick ={() => onClickingDelete(tea.id) }>Delete Tea Variety from Inventory</button>
        <hr />
      </React.Fragment>
    );
  }

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
};