import React from 'react'

const Follower = ({image, login, link}) => {
  return (
    <article className="card">
      <img src={image} alt={image}/>
      <h4>${login}</h4>
      <a href={link} className="btn">view profile</a>
    </article>
  )
}

export default Follower
