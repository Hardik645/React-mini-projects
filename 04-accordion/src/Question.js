import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showMore, setShowMore] = useState(false);
  return <div className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={() => { setShowMore(!showMore) }}>{!showMore && <AiOutlinePlus />}{showMore && <AiOutlineMinus />}</button>
    </header>
    <p>{!showMore ? "" : info}</p>
  </div>
};

export default Question;
