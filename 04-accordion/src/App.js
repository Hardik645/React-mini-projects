import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <main>
    <div className="container">
      <h2>Questions</h2>
      <section>
        {data.map((ques)=>{return <SingleQuestion key={ques.id} {...ques} />})}
      </section>
    </div>
  </main>
}

export default App;
