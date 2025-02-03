import React, { useState } from "react";
import Layout from "@theme/Layout";
import styles from "./info.module.css";
import infoData from "@site/static/info/info.json";

const Info = ({ theme = {} }) => {
  const [hoveredInfo, setHoveredInfo] = useState(null);

  const groupedInfo = Object.entries(infoData).reduce(
    (acc, [category, items]) => {
      acc[category] = items;
      return acc;
    },
    {}
  );

  const handleMouseEnter = (category, index) => {
    setHoveredInfo({ category, index });
  };

  const handleMouseLeave = () => {
    setHoveredInfo(null);
  };

  const renderInfoCard = (info, index, category) => (
    <div
      className={styles.info}
      key={info.id || index}
      onMouseEnter={() => handleMouseEnter(category, index)}
      onMouseLeave={handleMouseLeave}
      style={
        theme.cardBackground ? { backgroundColor: theme.cardBackground } : {}
      }
    >
      {index === 0 && (
        <div className={styles.categoryBox} style={theme.categoryBoxStyle}>
          {category}
        </div>
      )}

      <div className={styles.infoContent}>
        <div className={styles.infoHeader}>
          <img
            src={info.image}
            alt={info.title}
            className={`${styles.infoImage} ${
              info.noHover ? styles.noFilter : ""
            }`}
          />
          {info.status?.previously && (
            <span className={styles.previouslyText}>Previously</span>
          )}
        </div>

        <h2 style={{ color: info.titleColor || theme.defaultTitleColor }}>
          <i className={info.icon}></i> {info.title}
          {info.status?.dateRange && (
            <span className={styles.dateRangeText}>
              {info.status.dateRange}
            </span>
          )}
        </h2>

        {info.skills && (
          <div className={styles.skillsSection}>
            {info.skills.primary && (
              <div className={styles.primarySkills}>
                {info.skills.primary.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            )}
            {info.skills.tools && (
              <div className={styles.tools}>
                {info.skills.tools.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>
            )}
          </div>
        )}

        {info.links && (
          <div className={styles.linksSection}>
            {info.links.map((link, i) => (
              <h4 key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={theme.linkStyle}
                >
                  <i className={link.icon}></i> {link.text}
                </a>
              </h4>
            ))}
          </div>
        )}

        <p>{info.description}</p>

        {info.features && (
          <ul className={styles.featuresList}>
            {info.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <Layout title="Info" description="Info Page">
      <div className={styles.infoContainer} style={theme.containerStyle}>
        {Object.entries(groupedInfo).map(([category, items]) => (
          <div key={category} className={styles.categoryContainer}>
            <div className={styles.infoList}>
              {items.map((info, index) =>
                renderInfoCard(info, index, category)
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Info;
