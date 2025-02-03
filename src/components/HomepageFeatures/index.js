import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Create",
    Svg: require("@site/static/img/create.svg").default,
    description: (
      <>Creating good projects is the main focus of Biraru Studios</>
    ),
  },
  {
    title: "Refine",
    Svg: require("@site/static/img/refine.svg").default,
    description: <>Refining the projects to make them better and better</>,
  },
  {
    title: "Share",
    Svg: require("@site/static/img/share.svg").default,
    description: (
      <>Sharing the projects to the world as open source is the best</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
