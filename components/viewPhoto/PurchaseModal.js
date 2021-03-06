import React, { useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import { purchaseClient } from "../../graphql/clients";
import { useMutation } from "@apollo/client";
import { CREATE_PURCHASE } from "../../graphql/purchases/mutations";
import PropTypes from "prop-types";
import Modal from "../ui/modals/Modal";
import { HeadingOne, BodyOne } from "../ui/Typography";
import Input from "../ui/inputs/Input";
import { GreenButton } from "../ui/buttons";
import { track } from "../../constants";
import illustration from "../../assets/taxi.png";
const PurchaseModal = (props) => {
  const [downloadPhoto, { loading, data, error, called }] = useMutation(
    CREATE_PURCHASE,
    {
      client: purchaseClient,
    }
  );
  const [email, setEmail] = useState("");
  const toast = useToast();

  const regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  const { ID, contributorID, s3URL, contributorUsername } = props.photo;
  const getPhoto = async () => {
    if (email !== "" && email.length > 1 && regex.test(email)) {
      await downloadPhoto({
        variables: {
          purchaseInput: {
            photoID: ID,
            contributorID: contributorID,
            contributorUsername: contributorUsername,
            customerEmail: email,
            photo: {
              name: "IDK",
              imageURL: s3URL,
            },
          },
        },
      });
      track("App.DownloadPhoto", {
        photoID: ID.slice(0, 5),
        contributor: contributorUsername,
        customer: email,
      });
    } else {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="xl">
        {!loading && data && called && (
          <div className="flex flex-col text-center">
            <HeadingOne>Here is your image!</HeadingOne>
            <img src={illustration} alt="success" />
            <a
              className="mt-4 cursor-pointer"
              href={data.createPurchase.photo.imageURL}
              download="xsf.png"
              // rel="noreferrer"
              // target="_blank"
            >
              Download photo
            </a>
          </div>
        )}
        {!loading && !data && (
          <div>
            <HeadingOne>Please leave your email before you download</HeadingOne>
            <BodyOne>
              You can still download the image without leaving your email, we
              just want to send you updates when our Authors gives us more cool
              content
            </BodyOne>
            {error && <p className="text-red-700">{error.message}</p>}
            <div className="flex mt-4">
              <Input
                className="rounded-l-lg mr-0 p-4"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <GreenButton
                className="rounded-bl-none rounded-tl-none"
                onClick={() => getPhoto()}
              >
                Subscribe
              </GreenButton>
            </div>
          </div>
        )}
        {loading && (
          <div className="flex justify-center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        )}
      </Modal>
    </>
  );
};

PurchaseModal.propTypes = {};

export default PurchaseModal;
