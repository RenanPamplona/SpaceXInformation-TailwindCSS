import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

/*
<S.Wrapper
        onClick={() => {
          if (props.popUpState) {
            props.popUpState(props.id!);
          }

          if (props.linkToPush) {
            router.push(props.linkToPush);
          }
        }}
      >
        {props.name}
      </S.Wrapper>
*/

const SmallCard = (props: {
  children?: ReactNode;
  name: string;
  id?: string;
  popUpState?: (string: string) => void;
  linkToPush?: string;
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (props.popUpState) {
          props.popUpState(props.id!);
        }

        if (props.linkToPush) {
          router.push(props.linkToPush);
        }
      }}
      className="w-full border-2 border-solid border-rose-600 bg-gray-800 p-2 text-center text-lg font-bold hover:cursor-pointer hover:text-rose-600"
    >
      {props.name}
    </div>
  );
};

export default SmallCard;
