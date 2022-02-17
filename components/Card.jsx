import React from "react";
{
  /* 
  TODO: make cards link to conference website
  TODO: add calendar icon and make it add conference date to calendar 
  */
}
const Card = ({ conference }) => {
  return (
    <div className="border-2 border-stone-800 bg-white-20 p-2">
      <div className="text-base text-stone-800 font-semibold">
        {conference.name}
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
