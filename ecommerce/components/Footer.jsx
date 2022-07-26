import React from 'react'
import { BsFacebook,AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='footer-container'>
        <p>2022 Store.PK  All rights reserved</p>
        <p className='icons'>
            
           <a href='https://www.w3schools.com'><AiFillInstagram /></a>
            <AiOutlineTwitter/>
        </p>
    </div>
  )
}

export default Footer   