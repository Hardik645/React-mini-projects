import React from 'react';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return <div className="btn-container">
    {categories.map((category) => {
      return (
        <button 
          key={category}
          className={selectedCategory !== category ? 'filter-btn' : 'selected-btn'}
          onClick={()=>{setSelectedCategory(category)}}
          >
          {category}
        </button>
      )
    })}
  </div>;
};

export default Categories;
