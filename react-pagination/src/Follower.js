import React from 'react'

const Follower = ({image, login, link}) => {
  console.log(image, login, link)
  return (
    <article class="card">
      <img src={image} alt={image}/>
      <h4>${login}</h4>
      <a href={link} class="btn">view profile</a>
    </article>
  )
}

export default Follower
