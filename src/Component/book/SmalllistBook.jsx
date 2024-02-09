import React from 'react'

function SmalllistBook({books}) {
    const [name,price,title]=books
  return (
    <div>
        <h3>{name}</h3>
        <p> price of the book :{price}</p>
        <h6> Title: {title} </h6>
    </div>
  )
}

export default SmalllistBook;