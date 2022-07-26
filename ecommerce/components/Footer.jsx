import React from 'react'
import { BsFacebook,AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='footer-container'>
        <p>2022 Store.PK  All rights reserved</p>
        <p className='icons'>
            
           <AiFillInstagram />
            <AiOutlineTwitter/>
        </p>
    </div>
  )
}

export default Footer   