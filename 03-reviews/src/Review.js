import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const move = (motion) => {
    if (motion === "next") {
      if (index == people.length- 1) {
        setIndex(0)
      }
      else {
        setIndex(index + 1)
      }
    }
    else if (motion === "prev") {
      if (index === 0) {
        setIndex(people.length- 1)
      }
      else {
        setIndex(index - 1)
      }
    }
  }
  const random= ()=>{
    setIndex(Math.floor(Math.random() * people.length));
  }
  return (
    <div className="container">
      <div className="review">
        <div className="img-container">
          <img src={people[index].image} alt="" className="person-img" />
          <div className="quote-icon"><FaQuoteRight /></div>
        </div>
        <div>
          <h3 className="author">{people[index].name}</h3>
          <h4 className="job">{people[index].job}</h4>
          <p className="info">{people[index].text}</p>
          <button className="prev-btn" onClick={() => { move("prev") }} ><FaChevronLeft /></button>
          <button className="next-btn" onClick={() => { move("next") }}><FaChevronRight /></button>
        </div>
        <button className="random-btn" onClick={()=>{random()}}>Surprise me</button>
      </div>
    </div>
  );
};

export default Review;
