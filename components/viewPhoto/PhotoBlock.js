import React from "react";
import { useQuery } from "@apollo/client";
import { GET_A_USER } from "../../graphql/users/queries";
import { useDisclosure } from "@chakra-ui/react";
import image from "next/image";
import HeadingTwo from "../ui/Typography/HeadingTwo";
import BodyOne from "../ui/Typography/BodyOne";
import { GreenButton } from "../ui/buttons";
import PurchaseModal from "./PurchaseModal";
import { SocailButton } from "../ui/buttons";
import { socialIcons } from "../../constants";
/*TO-DO 
Add mixpanel
  */
const PhotoBlock = ({ photo, className, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, data } = useQuery(GET_A_USER, {
    variables: {
      ID: photo.contributorID,
    },
  });
  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-2 p-4">
      <div>
        <img
          src={photo.s3URL}
          alt={`Sasi-images`}
          className={`${className} rounded-lg h-auto`}
        />
      </div>
      <div>
        <HeadingTwo>{photo.contributorUsername}</HeadingTwo>
        <BodyOne className="font-bold">Attribution is not mandatory</BodyOne>
        <BodyOne>But we would really appreciate it</BodyOne>
        <GreenButton onClick={onOpen}>Download</GreenButton>
        <div>
          {loading && <p>Busy getting it</p>}
          {!loading && data && (
            <>
              {data.getAUser.socialAccounts.map((account, idx) => (
                <SocailButton key={idx} url={account.url}>
                  {socialIcons[account.name]}
                </SocailButton>
              ))}
            </>
          )}
        </div>
      </div>
      <PurchaseModal isOpen={isOpen} onClose={onClose} photo={photo} />
    </div>
  );
};

export default PhotoBlock;
