import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_A_USER } from "../../graphql/users/queries";
import { usersClient } from "../../graphql/clients";
import { useDisclosure } from "@chakra-ui/react";
import HeadingTwo from "../ui/Typography/HeadingTwo";
import BodyOne from "../ui/Typography/BodyOne";
import { GreenButton } from "../ui/buttons";
import PurchaseModal from "./PurchaseModal";
import { SocialButton } from "../ui/buttons";
import { socialIcons, track } from "../../constants";
import AttributionModal from "./AttributionModal";
/*TO-DO 
Add mixpanel
  */
const PhotoBlock = ({ photo, className, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openModal, setOpenModal] = useState(false);
  const { loading, error, data } = useQuery(GET_A_USER, {
    variables: {
      ID: photo.contributorID,
    },
    client: usersClient,
  });
  // const openDownload = () => {
  //   track("App.ViewPhoto.OpenDownloadModal");
  //   isOpen;
  // };
  const closeModal = () => setOpenModal(!openModal);

  return (
    <div className="grid md:grid-rows-1 md:grid-cols-2 gap-2  sm:grid-cols-1 p-4">
      <div className="md:mr-5">
        <img
          src={photo.s3URL}
          alt={`Sasi-images`}
          className={`${className} rounded-lg h-auto`}
        />
      </div>
      <div>
        <HeadingTwo>{photo.contributorUsername}</HeadingTwo>
        <BodyOne className="font-bold">Attribution is not mandatory</BodyOne>
        <BodyOne
          className="cursor-auto"
          onClick={() => {
            setOpenModal(true);
            track("App.ViewPhoto.OpenAttributtion");
          }}
        >
          But we would really appreciate it
        </BodyOne>
        <GreenButton onClick={onOpen}>Download</GreenButton>
        <div>
          {loading && !data && <p>Busy getting it</p>}
          {!loading && data && (
            <>
              {data.getAUser.socialAccounts.map((account, idx) => (
                <SocialButton key={idx} url={account.url}>
                  {socialIcons[account.name]}
                </SocialButton>
              ))}
            </>
          )}
        </div>
      </div>
      {data && (
        <AttributionModal
          isOpen={openModal}
          onClose={closeModal}
          socials={data.getAUser.socialAccounts}
        />
      )}
      <PurchaseModal isOpen={isOpen} onClose={onClose} photo={photo} />
    </div>
  );
};

export default PhotoBlock;
