import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const categories= ["all",...new Set(items.map((item)=>{return item.category}))];
function App() {
  const [item, setItem]=useState(items);
  const [selectedCategory,setSelectedCategory]=useState("all");
  
  useEffect(() => {
    const catgoriesItem=(selectedCategory)=>{
      if(selectedCategory==="all"){
        setItem(items)
      }
      else{
        setItem(items.filter((i)=>{return i.category===selectedCategory}))
      }
    }
    return catgoriesItem(selectedCategory)
  }, [selectedCategory]);
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>our menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Menu items={item} />
      </section>
    </main>
  );
}

export default App;
