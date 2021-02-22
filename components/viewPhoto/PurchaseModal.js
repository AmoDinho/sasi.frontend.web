import React from "react";
import { purchaseClient } from "../../graphql/clients";
import { useMutation } from "@apollo/client";
import { CREATE_PURCHASE } from "../../graphql/purchases/mutations";
import PropTypes from "prop-types";
import Modal from "../ui/modals/Modal";
import { HeadingOne, BodyOne } from "../ui/Typography";
import Input from "../ui/inputs/Input";
import { GreenButton } from "../ui/buttons";
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
          <div className="flex ">
            <Input className="rounded-l-lg mr-0 p-4" />
            <GreenButton className="rounded-r-lg">Subscribe</GreenButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

PurchaseModal.propTypes = {};

export default PurchaseModal;
