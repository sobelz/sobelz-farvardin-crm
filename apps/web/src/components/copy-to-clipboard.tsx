import { useState } from "react";

import { Button } from "./ui/button";
import { RiClipboardLine, RiFileCopyLine } from "@remixicon/react";

const CopyToClipboard = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);
  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button size="icon-sm" disabled={copied} onClick={copyHandler}>
      {copied ? <RiClipboardLine /> : <RiFileCopyLine />}
    </Button>
  );
};

export default CopyToClipboard;
