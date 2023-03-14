import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    setIsLoading(false);
    setJobs(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <section className="section">
      <h1 className="loading">Loading...</h1>
    </section>
  }
  const { title, dates, company, duties } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">

        <div className="btn-container">
          {
            jobs.map((job, index) => {
              return <button
                onClick={() => { setValue(index) }}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {job.company}
              </button>
            })
          }
        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
        </article>
        {
          duties.map((data, index) => {
            return <div className="job-desc">
              <FaAngleDoubleRight className='job-icon' />
              <p>{data}</p>
            </div>
          })
        }
      </div>
    </section>
  );
}

export default App
