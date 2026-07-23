import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='news-letters'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <form>
            <input type="text" placeholder='Your Email id'/>
            <button>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter