import React, { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { saveAs } from "file-saver";
import { purchaseClient } from "../../graphql/clients";
import { useMutation } from "@apollo/client";
import { CREATE_PURCHASE } from "../../graphql/purchases/mutations";
import PropTypes from "prop-types";
import Modal from "../ui/modals/Modal";
import { HeadingOne, BodyOne } from "../ui/Typography";
import Input from "../ui/inputs/Input";
import { GreenButton } from "../ui/buttons";
const PurchaseModal = (props) => {
  const [downloadPhoto, { loading, data, error, called }] = useMutation(
    CREATE_PURCHASE,
    {
      client: purchaseClient,
    }
  );
  const [email, setEmail] = useState("");
  const { ID, contributorID, s3URL, contributorUsername } = props.photo;
  const getPhoto = async () => {
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
  };

  if (data) {
    console.log("data", data);

    // const a = document.createElement("a");
    // a.href = data.createPurchase.photo.imageURL;
    // document.body.appendChild(a);
    // a.setAttribute("download", "filename.png");
    // a.click();
    // saveAs(data.createPurchase.photo.imageURL, "file.png");
  }
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        {!loading && data && called && (
          <div>
            Success
            <a
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
            <div className="flex ">
              <Input
                className="rounded-l-lg mr-0 p-4"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <GreenButton className="rounded-r-lg" onClick={() => getPhoto()}>
                Subscribe
              </GreenButton>
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
