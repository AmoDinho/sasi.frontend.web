import React, { useState, useRef } from "react";
import { CopyIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import Modal from "../ui/modals/Modal";
import { SocialButton } from "../ui/buttons";
import { socialIcons, track } from "../../constants";
import { HeadingOne } from "../ui/Typography";
const AttributionModal = (props) => {
  const { socials } = props;
  const [hasCopied, setHasCopied] = useState(false);
  const linkRef = useRef(null);

  const copyToClipboard = async (copyMe) => {
    // linkRef.current.id;
    // document.execCommand("copy");
    await navigator.clipboard.writeText(copyMe);
    track("App.AttributionModal.ClickCopy");
    setHasCopied(true);
  };
  console.log("linkRef", linkRef);
  return (
    <Modal isOpen={props.isOpen} onClose={() => props.onClose()}>
      <div className="p-5">
        <HeadingOne>This is how to attribute</HeadingOne>
        <div>
          {socials.map((social, idx) => (
            <div className="flex justify-between mt-4">
              <SocialButton key={idx} url={social.url}>
                {socialIcons[social.name]}
              </SocialButton>
              <p id={social.url} ref={linkRef}>
                {social.name}
              </p>
              <div>
                <IconButton
                  icon={
                    <CopyIcon onClick={() => copyToClipboard(social.url)} />
                  }
                />
                {hasCopied ? "Copied" : "Copy"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default AttributionModal;
