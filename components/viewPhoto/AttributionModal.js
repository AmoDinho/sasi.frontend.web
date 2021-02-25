import React ,{useState}from "react";
import { CopyIcon } from "@chakra-ui/icons";
import { IconButton,useClipboard } from "@chakra-ui/react";
import Modal from "../ui/modals/Modal";
import { SocialButton } from "../ui/buttons";
import { socialIcons } from "../../constants";
import { HeadingOne } from "../ui/Typography";
const AttributionModal = (props) => {
  const { socials } = props;
  const { hasCopied, onCopy } = useClipboard()
const [copyValue,setCopyValue] =useState("")
  return (
    <Modal isOpen={props.isOpen} onClose={() => props.onClose()}>
      <div className="p-5">
        <HeadingOne>This is how to attribute</HeadingOne>
        <div>
          {socials.map((social, idx) => (
            <SocialButton key={idx} url={social.url}>
              {socialIcons[social.name]}
            </SocialButton>
                      <IconButton icon={<CopyIcon />} />

          ))}
        </div>
      </div>
    </Modal>
  );
};

export default AttributionModal;
