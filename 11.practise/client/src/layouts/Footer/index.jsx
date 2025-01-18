import React from 'react'
import styles from '../Footer/index.module.scss'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
   <>
   <div className={styles.common}>
    <div className={styles.card1}>
      <div className={styles.head}>
      <h2 >Time</h2>
      <h2 className={styles.head2} >Zone</h2>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam adipisci quis numquam distinctio ipsam rerum quo dolores voluptate rem perferendis.</p>
    </div>
    <div className={styles.card2}>
      <h3>Quick Links</h3>
      <p>About</p>
      <p>Offers</p>
      <p>Get Cuppon</p>
      <p>Contact Us</p>
    </div>
    <div className={styles.card2}>
      <h3>New Products</h3>
      <p>Woman Cloth</p>
      <p>Fashion Accessories</p>
      <p>Man Accessories</p>
      <p>Rubber made Toys</p>
    </div>
    <div className={styles.card2}>
      <h3>Support</h3>
      <p>Frequently Asked Questions</p>
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
      <p>Report a Payment Issue</p>
    </div>
    <div className={styles.icons}>
    <FaInstagram />
    <FaFacebookF />
    <FaTwitter />
    <FaLinkedinIn />

    </div>
   </div>
   </>
  )
}

export default Footer