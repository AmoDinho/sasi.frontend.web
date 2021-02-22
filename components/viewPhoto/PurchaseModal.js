import React from "react";
import PropTypes from "prop-types";
import Modal from "../ui/modals/Modal";
import { HeadingOne } from "../ui/Typography";
const PurchaseModal = (props) => {
  return (
    <>
      <Modal isOpen={props.isOpen}>
        <div>
          <HeadingOne>Please leave your email before you download</HeadingOne>
        </div>
      </Modal>
    </>
  );
};

PurchaseModal.propTypes = {};

export default PurchaseModal;
