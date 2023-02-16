import * as React from "react";

import classNames from "classnames";
import { utils } from "ethers";
import { useContractRead } from "wagmi";

import ERC721K_ABI from "./ERC721K.json";

interface ERC721KDesignProps {
  className?: string;
  contractAddress: string;
  args: any[];
}

const DEFAULT_ARGS = [
  utils.solidityPack(
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
  ),
];

export const ERC721KDesign = ({
  className,
  contractAddress,
  args = [DEFAULT_ARGS],
}: ERC721KDesignProps) => {
  const txRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: ERC721K_ABI,
    functionName: "renderPreview",
    args,
  });

  const [img, setImg] = React.useState<string>();
  React.useEffect(() => {
    if (txRead.data) {
      setImg(String(txRead.data));
    }
  }, [txRead.data]);

  // if (!txRead.data || !txRead.isSuccess) return null;
  const classes = classNames(className, "ERC721KDesign");
  return <img className={classes} src={img} />;
};

export default ERC721KDesign;
