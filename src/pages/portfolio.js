import React, { useState } from "react";
import Layout from "@theme/Layout";
import styles from "./portfolio.module.css";
import portfolioData from "./portfolioData.json";

const Portfolio = ({ theme = {} }) => {
  const [hoveredPortfolio, setHoveredPortfolio] = useState(null);
  const groupedPortfolio = portfolioData.reduce((acc, portfolio) => {
    const category = portfolio.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(portfolio);
    return acc;
  }, {});

  const handleMouseEnter = (category, index) => {
    setHoveredPortfolio({ category, index });
  };

  const handleMouseLeave = () => {
    setHoveredPortfolio(null);
  };

  return (
    <Layout title="Portfolio" description="Portfolio Page">
      <div className={styles.portfolioContainer} style={theme.containerStyle}>
        {Object.keys(groupedPortfolio).map((category) => (
          <div key={category} className={styles.categoryContainer}>
            <div className={styles.portfolioList}>
              {groupedPortfolio[category].map((portfolio, index) => (
                <div
                  className={styles.portfolio}
                  key={index}
                  onMouseEnter={() => handleMouseEnter(category, index)}
                  onMouseLeave={handleMouseLeave}
                  style={
                    theme.cardBackground
                      ? { backgroundColor: theme.cardBackground }
                      : {}
                  }
                >
                  {index === 0 && (
                    <div
                      className={styles.categoryBox}
                      style={theme.categoryBoxStyle}
                    >
                      {category}
                    </div>
                  )}
                  <div>
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className={`${styles.portfolioImage} ${portfolio.noHover === true ? styles.noFilter : ''}`}
                    />
                    {portfolio.previously && (
                      <span className={styles.previouslyText}>Previously</span>
                    )}
                    <h2
                      style={{
                        color: portfolio.titleColor || theme.defaultTitleColor,
                      }}
                    >
                      {portfolio.title}{" "}
                      {portfolio.dateRange && (
                        <span className={styles.dateRangeText}>
                          {portfolio.dateRange}
                        </span>
                      )}
                    </h2>
                    {portfolio.subtitle && (
                      <h3 className={styles.subtitle}>{portfolio.subtitle}</h3>
                    )}
                    {portfolio.links &&
                      portfolio.links.map((link, i) => (
                        <h4 key={i}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={theme.linkStyle}
                          >
                            {link.text}
                          </a>
                        </h4>
                      ))}
                    {portfolio.languages && (
                      <small>{portfolio.languages.join(", ")}</small>
                    )}
                    <p>{portfolio.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Portfolio;
