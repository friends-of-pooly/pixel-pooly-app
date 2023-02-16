import * as React from "react";

import { usePoolyPals } from "@pooly-pals/framework-react";
import {
  ERC721AttributesBoostNumbers,
  ERC721AttributesFilteredByTraitType,
} from "@turbo-eth/erc721-wagmi";
import {
  useERC721KStorageRead,
  useERC721KTokenURIPreview,
} from "@turbo-eth/erc721k-wagmi";
import { utils } from "ethers";

interface ERC721KTraitsGeneratePreviewProps {
  className?: string;
  contractAddress: string;
  args?: any[];
  layers?: any[];
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

export const ERC721KTraitsGeneratePreview = ({
  className,
  contractAddress,
}: ERC721KTraitsGeneratePreviewProps) => {
  const { builder } = usePoolyPals();

  const Character = {
    bg: builder[0],
    body: builder[1],
    head: builder[2],
    bodyLower: builder[3],
    left: builder[4],
    right: builder[5],
    headAcc: builder[6],
    faceAcc: builder[7],
    bodyAcc: builder[8],
    bodyLowerAcc: builder[9],
    leftAcc: builder[10],
    rightAcc: builder[11],
  };

  const traitsFormatted = useERC721KStorageRead({
    contractAddress,
    args: Character,
    functionName: "formatTraitsBytesFromCharacter",
  });

  const txRead = useERC721KTokenURIPreview({
    contractAddress,
    layers: DEFAULT_ARGS,
    traits: traitsFormatted.data,
    tokenId: "0",
  });

  const [attributes, setAttributes] = React.useState();
  React.useEffect(() => {
    if (txRead.data) {
      (async () => {
        if (txRead.data) {
          const data = await fetch(txRead.data as unknown as string);
          const json = await data.json();
          setAttributes(json?.attributes);
        }
      })();
    }
  }, [txRead.data]);

  if (!txRead?.data || !txRead?.isSuccess) return null;

  return (
    <>
      <ERC721AttributesFilteredByTraitType
        attFilter={[
          "Head",
          "Body",
          "Body Lower",
          "Left",
          "Right",
          "Head Acc",
          "Face Acc",
          "Body Acc",
          "Left Acc",
          "Right Acc",
        ]}
        attributes={attributes || []}
        className="flex flex-col"
        classNameItem="flex justify-between items-center border-b-2 py-[6px]"
        classNameLabel="text-sm font-bold block w-1/4"
        classNameValue="text-sm font-normal text-right w-3/4"
      />
      <div className="my-4" />
      <ERC721AttributesBoostNumbers
        attributes={attributes}
        className="grid grid-cols-12 gap-y-5 gap-x-10 text-white"
        classNameItem="flex flex-col flex-col-reverse text-center bg-indigo-600 rounded-md py-2 shadow-md hover:shadow-lg col-span-4"
        classNameLabel="text-xl"
        classNameValue="text-2xl font-bold"
      />
    </>
  );
};

export default ERC721KTraitsGeneratePreview;
