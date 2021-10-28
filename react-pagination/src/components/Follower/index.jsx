import React from 'react'

const Follower = ({githubImage, githubLogin, githubLink}) => {
  return (
    <article className="card">
      <img src={githubImage} alt={githubImage} />
      <h4>${githubLogin}</h4>
      <a href={githubLink} className="btn">view profile</a>
    </article>
  )
}

export default Follower
