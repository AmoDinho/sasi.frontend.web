import React from "react";
import PropTypes from "prop-types";
import Modal from "../ui/modals/Modal";
import { HeadingOne, BodyOne } from "../ui/Typography";
const PurchaseModal = (props) => {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div>
          <HeadingOne>Please leave your email before you download</HeadingOne>
          <BodyOne>
            You can still download the image without leaving your email, we just
            want to send you updates when our Authors gives us more cool content
          </BodyOne>
        </div>
      </Modal>
    </>
  );
};

PurchaseModal.propTypes = {};

export default PurchaseModal;
