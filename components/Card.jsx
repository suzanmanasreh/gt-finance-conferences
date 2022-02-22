import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

{
  /* 
  TODO: make it so that when user clicks calendar button they can add conference date to their calendar 
  TODO: or install add to calendar package and use that
  */
}

const Card = ({ conference }) => {
  return (
    <div className="border-2 border-stone-800 bg-white-20 p-2 hover:bg-slate-200">
      <div className="flex justify-between text-base text-stone-800 font-semibold">
        <Link href={conference.website} passHref>
          <a>
            <div className="hover:text-yellow-20">{conference.name}</div>
          </a>
        </Link>
        <div className="shrink-0 p-1 hover:text-blue-950">
          <FaCalendarAlt size={20} />
        </div>
      </div>
      <div className="font-medium text-stone-800 text-sm">
        {conference.location}
        {". "}
        {conference.start}
        {" - "}
        {conference.end}
      </div>
      <div className="font-medium text-stone-800 text-sm italic text-blue-950">
        {"Topics: "}
        {conference.topics}
      </div>
      <div className="font-medium text-stone-800 text-sm italic text-blue-950">
        {"Submission Deadline: "}
        {conference.submission_deadline}
      </div>
      <div className="font-medium text-stone-800 text-sm italic text-blue-950">
        {"Submission Fee: $"}
        {conference.submission_fee}
      </div>
    </div>
  );
};

export default Card;
