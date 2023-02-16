import * as React from "react";

import classNames from "classnames";
import { utils } from "ethers";
import { useContractRead } from "wagmi";

import ERC721K_ABI from "./ERC721K.json";

interface ERC721KImageRenderPreviewProps {
  className?: string;
  contractAddress: string;
  args: any[];
}

const DEFAULT_ARGS = utils.solidityPack(
  [
    "uint8",
    "uint8",
    "uint8",
    "uint8",
    "uint8",
    "uint8",
    "uint8",
    "uint8",
    "uint8",
    "uint8",
    "uint8",
    "uint8",
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);

export const ERC721KImageRenderPreview = ({
  className,
  contractAddress,
  args = [DEFAULT_ARGS],
}: ERC721KImageRenderPreviewProps) => {
  const txRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: ERC721K_ABI,
    functionName: "renderPreview",
    args,
  });

  if (!txRead.data || !txRead.isSuccess) return null;
  const classes = classNames(className, "ERC721KImageRenderPreview");
  return <img className={classes} src={String(txRead.data)} />;
};

export default ERC721KImageRenderPreview;
