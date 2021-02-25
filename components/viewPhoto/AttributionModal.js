import React, { useState, useRef } from "react";
import { CopyIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import Modal from "../ui/modals/Modal";
import { SocialButton } from "../ui/buttons";
import { socialIcons } from "../../constants";
import { HeadingOne } from "../ui/Typography";
const AttributionModal = (props) => {
  const { socials } = props;
  const [hasCopied, setHasCopied] = useState(false);
  const linkRef = useRef(null);

  const copyToClipboard = (e) => {
    linkRef.current.select();
    document.execCommand("copy");
    setHasCopied(true);
  };
  console.log("linkRef", linkRef);
  return (
    <Modal isOpen={props.isOpen} onClose={() => props.onClose()}>
      <div className="p-5">
        <HeadingOne>This is how to attribute</HeadingOne>
        <div>
          {socials.map((social, idx) => (
            <div>
              <SocialButton key={idx} url={social.url}>
                {socialIcons[social.name]}
              </SocialButton>
              <p>{social.name}</p>
              <IconButton
                icon={<CopyIcon onClick={() => copyToClipboard()} />}
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default AttributionModal;
