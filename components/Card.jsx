import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
const ics = require('ics')
const FileSaver = require('file-saver');

function createIcs(conference) {
  var start_date = new Date(conference.start);
  var end_date = new Date(conference.end);
  const event = {
    start: [start_date.getFullYear(), start_date.getMonth(), start_date.getDate()],
    end: [end_date.getFullYear(), end_date.getMonth(), end_date.getDate()],
    title: conference.name,
    description: "Submission Deadline: " + conference.submission_deadline,
    location: conference.location,
    url: conference.website,
    categories: [conference.topics],
    status: 'TENTATIVE'
  }

  ics.createEvent(event, (error, value) => {
    if (error) {
      console.log(error)
      return
    }
    console.log(value)
    var file = new File([value], "conference.ics", {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file)
})
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
        <div className="shrink-0 p-1 hover:text-yellow-20">
          <FaCalendarAlt size={20} onClick={() => {createIcs(conference)}} />
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
      {/* <div className="font-medium text-stone-800 text-sm italic text-blue-950">
        {"Submission Fee: $"}
        {conference.submission_fee}
      </div> */}
    </div>
  );
};

export default Card;
