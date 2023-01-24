import React, { ReactNode } from "react";

const LabelAndInfo = (props: {
  children?: ReactNode;
  label: string;
  info: string;
  secondaryLabel?: string;
  secondaryInfo?: string;
}) => {
  return (
    <div className="flex w-full justify-between border-b-2 border-b-white pb-1 xl:text-lg">
      <div>
        <label className="font-bold">{props.label}</label>
        {props.secondaryLabel ? (
          <label className="font-bold opacity-80">
            {" "}
            / {props.secondaryLabel}
          </label>
        ) : (
          <></>
        )}
      </div>
      <div>
        <span>{props.info}</span>
        {props.secondaryInfo ? (
          <span className="opacity-80"> / {props.secondaryInfo}</span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LabelAndInfo;
