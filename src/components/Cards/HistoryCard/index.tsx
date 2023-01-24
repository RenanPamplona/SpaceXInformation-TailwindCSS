import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { HistoryType } from "../../../services/history";

const monthName = (month: string) => {
  switch (month) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "March";
    case "04":
      return "April";
    case "05":
      return "May";
    case "06":
      return "June";
    case "07":
      return "July";
    case "08":
      return "Aug";
    case "09":
      return "Sept";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
  }
};

const HistoryCard = (props: { children?: ReactNode; event: HistoryType }) => {
  const router = useRouter();

  const year = props.event?.event_date_utc.slice(0, 4);
  const month = props.event?.event_date_utc.slice(5, 7);
  const day = props.event?.event_date_utc.slice(8, 10);

  return (
    <div className="flex w-full flex-col items-center text-center">
      <div className="flex w-full items-center justify-center gap-2 bg-rose-600 p-2 font-bold">
        <span>{day}</span>
        <span>{monthName(month)}</span>
        <span>{year}</span>
      </div>

      <div className="flex w-full flex-col gap-4 bg-gray-800 p-4 lg:p-12">
        <span className="text-2xl font-bold xl:text-3xl">
          {props.event.title}
        </span>
        <span>{props.event.details}</span>
      </div>

      <div
        onClick={() =>
          router.push(
            props.event.links.article == null
              ? "/history"
              : props.event.links.article
          )
        }
        className="w-full bg-rose-600 p-2 text-xl font-bold hover:bg-white hover:text-rose-600"
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
    </div>
  );
};

export default HistoryCard;
