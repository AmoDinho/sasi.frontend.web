import React, { Children } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
const ModalDefault = ({ isOpen, onClose, children, size }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent className="p-5 w-full">{children}</ModalContent>
      </Modal>
    </>
  );
};

ModalDefault.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
export default ModalDefault;
