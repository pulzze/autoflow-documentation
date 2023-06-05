import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ABCDE
      </>
    ),
    link: 'docs/documentation/overview'
  },
  {
    title: 'Tutorial',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        abc
      </>
    ),
    link: 'docs/tutorial'
  },
  {
    title: 'Templates',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        abc
      </>
    ),
    link: 'docs/templates'
  },
  {
    title: 'Support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        abc
      </>
    ),
    link: 'docs/support/help-center'
  },
  {
    title: 'Release Notes',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        abc
      </>
    ),
    link: 'docs/release-note'
  },
  {
    title: 'Community',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        abc
      </>
    ),
    link: 'docs/community'
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
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
