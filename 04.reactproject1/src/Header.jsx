import React from "react";
import "react-router-dom";
import styles from "../src/index.module.scss";
import { NavLink } from "react-router-dom";
import img1 from './images/html.png'
import img2 from './images/css.png'
import img3 from './images/Js.png'
import img4 from './images/react.png'


const Header = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <h2 className={styles.logo}>Learnify</h2>
          <nav>
            <ul>
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Courses</NavLink>
              </li>
              <li>
                <NavLink>Resources</NavLink>
              </li>
              <li>
                <NavLink>Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.cards}>
            <div className={styles.card1}>
              <div className={styles.img1}>
                <img src={img1} alt="" />
              </div>
              <div className={styles.cardbody}>
                <h5>HTML</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius facilis, reiciendis iste eveniet excepturi!</p>
                <p>
                  <span>Price : 35$</span>
                </p>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.img2}>
                <img src={img2} alt="" />
              </div>
              <div className={styles.cardbody}>
                <h5>CSS</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt optio harum expedita, sapiente placeat culpa ab? Sit, minus sint.</p>
                <p>
                  <span>Price : 40$</span>
                </p>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.img3}>
                <img src={img3} alt="" />
              </div>
              <div className={styles.cardbody}>
                <h5>JS</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nihil voluptate in quo delectus sunt, tempora tempore officiis aliquam incidunt?</p>
                <p>
                  <span>Price : 45$</span>
                </p>
              </div>
            </div>
            <div className={styles.card4}>
              <div className={styles.img4}>
                <img src={img4} alt="" />
              </div>
              <div className={styles.cardbody}>
                <h5>React</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe perspiciatis vitae recusandae labore ad architecto ullam accusantium sunt quo?</p>
                <p>
                  <span>Price : 55$</span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
