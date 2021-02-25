import React from "react";
import Modal from "../ui/modals/Modal";

const AttributionModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>This is how to attribute</div>
    </Modal>
  );
};

export default AttributionModal;
