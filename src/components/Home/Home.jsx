import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";

import styles from "./Home.module.css";

import img from "../../assets/resume.svg";
import resume1 from '../../assets/resume1.jpg'
import resume2 from '../../assets/resume2.jpg'

function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
        <span className={styles.type}>It's &nbsp;<Typewriter 
              onInit={(typewriter) => {
                typewriter
                  .typeString("FUN")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("FAST")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("FREE")
                  .start();
              }}
            /></span>
          <h2 className={styles.heading}>
           The Canvas of Your Career: Paint Your Success Story with Our <span>Resume Builder!</span>
          </h2>
          <div className={styles.description}>
            <p>Create a professional and compelling resume effortlessly with our user-friendly Resume Builder.</p>
          </div>

          <button><Link className={styles.link} to="/resume">Create Your CV Now</Link></button>
        </div>

        <div className={styles.right}>
          <img src={img} alt="Resume" />
        </div>
      </div>

      <div className={styles.container1}>
        <div>
          <img className={styles.sideimg} src={resume1} alt="Resume" />
        </div>
        <div className={styles.lefttxt}>
          <h2>Why choose our Resume Builder?</h2>
              <ul>
                <li>Easy-to-Use Interface</li>
                <li>Professional Template</li>
                <li>Clarity and Conciseness</li>
                <li>Impactful Summary/Objective</li>
                <li>Achievement-Oriented</li>
              </ul>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.lefttxt}>
        <h1>Get Noticed and Get Hired with Our Resume Building Tools!
          Because Life is Too Short for Dull Resumes! </h1>
        </div>
        <div className={styles.right}>
          <img src={resume2} alt="Resume" />
        </div>
      </div>
      <div className={styles.footer}>
        <p>© Krishnansh Tiwari</p>
      </div>
    </>
  );
}

export default Header