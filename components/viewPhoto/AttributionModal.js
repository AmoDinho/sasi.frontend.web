import React from "react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { IconButton } from "@chakra-ui/react"
import Modal from "../ui/modals/Modal";
import { SocialButton } from "../ui/buttons";
import { socialIcons } from "../../constants";
import { HeadingOne } from "../ui/Typography";
const AttributionModal = (props) => {
  const { socials } = props;
  return (
    <Modal isOpen={props.isOpen} onClose={() => props.onClose()}>
      <div className="p-5">
        <HeadingOne>This is how to attribute</HeadingOne>
        <div>
          {socials.map((social, idx) => (
            <SocialButton key={idx} url={social.url}>
              {socialIcons[social.name]}
            </SocialButton>
          ))}
<IconButton icon={}
        </div>
      </div>
    </Modal>
  );
};

export default AttributionModal;
