import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function EditItemForm(props) {
  const { item } = props;
  const firestore = useFirestore();
  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem();
    const propertiesToUpdate = {
      name: event.target.name.value,
      description: event.target.description.value,
      image: event.target.image.value,
    };
    return firestore.update(
      { collection: "items", doc: item.id },
      propertiesToUpdate
    );
  }
  return (
    <React.Fragment>
      <ReusableForm
        buttonText="Update Equipment"
        formSubmissionHandler={handleEditItemFormSubmission}
      />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditItem: PropTypes.func,
};

export default EditItemForm;
