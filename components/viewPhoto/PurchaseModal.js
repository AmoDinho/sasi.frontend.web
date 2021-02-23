import React from "react";
import { Spinner } from "@chakra-ui/react";
import { purchaseClient } from "../../graphql/clients";
import { useMutation } from "@apollo/client";
import { CREATE_PURCHASE } from "../../graphql/purchases/mutations";
import PropTypes from "prop-types";
import Modal from "../ui/modals/Modal";
import { HeadingOne, BodyOne } from "../ui/Typography";
import Input from "../ui/inputs/Input";
import { GreenButton } from "../ui/buttons";
const PurchaseModal = (props) => {
  const [downloadPhoto, { loading, data, error }] = useMutation(
    CREATE_PURCHASE,
    {
      client: purchaseClient,
    }
  );

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        {!loading && (
          <div>
            <HeadingOne>Please leave your email before you download</HeadingOne>
            <BodyOne>
              You can still download the image without leaving your email, we
              just want to send you updates when our Authors gives us more cool
              content
            </BodyOne>
            {error && <p className="text-red-700">{error.message}</p>}
            <div className="flex ">
              <Input className="rounded-l-lg mr-0 p-4" />
              <GreenButton className="rounded-r-lg">Subscribe</GreenButton>
            </div>
          </div>
        )}
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </Modal>
    </>
  );
};

PurchaseModal.propTypes = {};

export default PurchaseModal;
