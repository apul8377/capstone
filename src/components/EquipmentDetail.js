import React from "react";
import PropTypes from "prop-types";
import { databaseURL } from "../firebase";
import Image from "./Image";

function EquipmentDetail(props) {
  const { item, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>{item.name}</h1>
      
      <p>{item.description}</p>
      <button onClick={props.onClickingEdit}>Update item</button>
      <button onClick={() => onClickingDelete(item.id)}>Delete item</button>
      <hr />
    </React.Fragment>
  );
}

EquipmentDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default EquipmentDetail;
