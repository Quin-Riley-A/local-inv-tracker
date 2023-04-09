import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

export default function TeaList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.teaList.map((tea) =>
      <Tea
        whenTeaClicked={ props.onTeaClicked }
        name={tea.name}
        variety={tea.variety}
        description={tea.description}
        quantity={tea.quantity}
        id={tea.id}
        key={tea.id} /> 
      )}
    </React.Fragment>
  );
}

TeaList.propTypes= {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func,
};
