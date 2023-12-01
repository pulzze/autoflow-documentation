import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation',
    Svg: require('@site/static/img/main_page_documentations_icon.svg').default,
    description: (
      <>
        Read the documentation
      </>
    ),
    link: 'docs/documentation/overview'
  },
  {
    title: 'Examples',
    Svg: require('@site/static/img/main_page_template_icon.svg').default,
    description: (
      <>
        Learn by following examples
      </>
    ),
    link: 'docs/Documentation/Examples/'
  },
  {
    title: 'Tutorial',
    Svg: require('@site/static/img/main_page_tutorial_icon.svg').default,
    description: (
      <>
        Watch Tutorials
      </>
    ),
    link: 'docs/tutorial'
  },
  // {
  //   title: 'Support',
  //   Svg: require('@site/static/img/main_page_support_icon.svg').default,
  //   description: (
  //     <>
  //       Get Support 
  //     </>
  //   ),
  //   link: 'docs/support/help-center'
  // },
  // {
  //   title: 'Release Notes',
  //   Svg: require('@site/static/img/main_page_release_note_icon.svg').default,
  //   description: (
  //     <>
  //       See the release notes
  //     </>
  //   ),
  //   link: 'release-note'
  // },  
  // {
  //   title: 'Community',
  //   Svg: require('@site/static/img/main_page_community_icon.svg').default,
  //   description: (
  //     <>
  //       Ask questions
  //     </>
  //   ),
  //   link: 'docs/Community'
  // },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} style={{padding: 1.5 + 'em'}} role="img"/>
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
