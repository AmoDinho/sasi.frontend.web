import React from "react";
import Modal from "../ui/modals/Modal";
import { SocialButton } from "../ui/buttons";
import { socialIcons } from "../../constants";
import { HeadingOne } from "../ui/Typography";
const AttributionModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={() => props.onClose()}>
      <div className="p-5">
        <HeadingOne>This is how to attribute</HeadingOne>
      </div>
    </Modal>
  );
};

export default AttributionModal;
