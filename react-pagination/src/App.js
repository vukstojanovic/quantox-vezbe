import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const {loading, data} = useFetch();
  const [followers, setFollowers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!loading) {
      setFollowers(data[currentPage]);
    }
  }, [loading, currentPage, data]);

  function goToPrev() {
    if (currentPage <= 0) {
      setCurrentPage(data.length - 1);
    } else {
      setCurrentPage(prev => prev - 1);
    }
  }

  function goToNext() {
    if (currentPage >= data.length - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(prev => prev + 1);
    }
  }

  return (
    <main>
      <div class="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div class="underline"></div>
      </div>
      <section class="followers">
        <div class="container">
          {followers.map((item, index) => {
            const image = item.avatar_url;
            const login = item.login;
            const link = item.html_url;
            return <Follower key={index} image={image} login={login} link={link}/>
          })}
        </div>
        {!loading && (
          <div class="btn-container">
            <button class="prev-btn" onClick={goToPrev}>prev</button>
            {data.map((item, index) => {
              return (
                <button key={index} class={currentPage === index ? "page-btn active-btn" : "page-btn null"} onClick={() => setCurrentPage(index)}>
                  {index + 1}
                </button>
              );
            })}
            <button class="next-btn" onClick={goToNext}>next</button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
