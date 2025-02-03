import React from "react";
import Layout from "@theme/Layout";
import styles from "./portfolio.module.css";

const Portfolio = ({ theme = {} }) => {
  return (
    <Layout title="Portfolio" description="Portfolio Page">
      <div className={styles.portfolioContainer}>
        <section className={styles.heroSection}>
          <h1>
            <i className="fas fa-hand-wave"></i> Hey there!
          </h1>
          <p className={styles.intro}>
            I'm <span className={styles.highlight}>Biraru</span>, a passionate
            developer who likes to create ideas with code.
          </p>
        </section>

        <hr className={styles.divider} />

        <section>
          <h2>
            <i className="fas fa-rocket"></i> What I Do
          </h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>
                <i className="fas fa-code"></i> Scripting
              </h3>
              <p>
                Creating powerful, efficient scripts that make things work
                seamlessly
              </p>
            </div>
            <div className={styles.skillCard}>
              <h3>
                <i className="fas fa-laptop-code"></i> Programming
              </h3>
              <p>
                Building applications and games that people love to use
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        <section>
          <h2>
            <i className="fas fa-star"></i> About Me
          </h2>
          <div className={styles.portfolioGrid}>
            <div className={styles.portfolioCard}>
              <h3>
                <i className="fas fa-map-marker-alt"></i> Location
              </h3>
              <p>Based in Pakistan (PST Time Zone)</p>
            </div>
            <div className={styles.portfolioCard}>
              <h3>
                <i className="fas fa-hourglass-half"></i> Experience
              </h3>
              <p>6+ Years in Scripting & Development</p>
            </div>
            <div className={styles.portfolioCard}>
              <h3>
                <i className="fas fa-bolt"></i> Availability
              </h3>
              <ul>
                <li>
                  <i className="fas fa-calendar-week"></i> Weekdays: 15 Hours
                </li>
                <li>
                  <i className="fas fa-calendar-day"></i> Weekends: 4.5 Hours
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.benefitsSection}>
            <h3>
              <i className="fas fa-award"></i> Why Work With Me?
            </h3>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h4>
                  <i className="fas fa-tasks"></i> Organized Workflow
                </h4>
                <p>
                  Clean code, clear communication, structured development
                  process
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h4>
                  <i className="fas fa-layer-group"></i> Multi-tasking Pro
                </h4>
                <p>Capable of handling multiple projects efficiently</p>
              </div>
              <div className={styles.benefitCard}>
                <h4>
                  <i className="fas fa-check-circle"></i> Quality First
                </h4>
                <p>High standards in everything I deliver</p>
              </div>
              <div className={styles.benefitCard}>
                <h4>
                  <i className="fas fa-rocket"></i> Driven Developer
                </h4>
                <p>Passionate about creating the best possible solutions</p>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        <section>
          <h2>
            <i className="fas fa-coins"></i> Payment Information
          </h2>
          <div className={styles.paymentSection}>
            <div className={styles.paymentMethods}>
              <h3>
                <i className="fas fa-credit-card"></i> Accepted Methods
              </h3>
              <ul>
                <li>
                  <i className="fas fa-gamepad"></i> Robux
                </li>
                <li>
                  <i className="fab fa-bitcoin"></i> Crypto
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;
