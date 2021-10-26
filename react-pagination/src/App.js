import React, { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'
import Follower from './components/Follower/Follower'
import usePagination from './hooks/usePagination'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

function App() {
  const {data, loading} = useFetch(url);
  let limit = 10;
  const {currentPage, setCurrentPage, goToNext, goToPrev, paginate} = usePagination(limit);
  const [arrayOfArrays, setArrayOfArrays] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (!loading) {
      const paginatedList = paginate(data);
      setArrayOfArrays(paginatedList);
      setFollowers(paginatedList[currentPage]);
    }
  }, [loading, currentPage, data])

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination title"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        {!loading && (<div className="container">
          {followers.map((item, index) => {
            const image = item.avatar_url;
            const login = item.login;
            const link = item.html_url;
            return <Follower key={index} image={image} login={login} link={link}/>
          })}
        </div>)}
        {!loading && (<div className="btn-container">
          <button className="prev-btn" onClick={() => goToPrev(arrayOfArrays)}>prev</button>
          {arrayOfArrays.map((item, index) => {
            return (
              <button key={index} className={currentPage === index ? "page-btn active-btn" : "page-btn null"} onClick={() => setCurrentPage(index)}>
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={() => goToNext(arrayOfArrays)}>next</button>
        </div>)}
      </section>
    </main>
  )
}

export default App
