import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/fundamentals/intro">
            Start Learning 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Learn Python with Rolas - Fundamentals, Interview Prep, and more.">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h2>Available Modules</h2>
            <div className="row">
              <div className="col col--6">
                <h3>Fundamentals</h3>
                <p>Master the basics of Python syntax and data types.</p>
                <Link to="/docs/fundamentals/intro">Explore Fundamentals</Link>
              </div>
              <div className="col col--6">
                <h3>Interview Prep</h3>
                <p>Get ready for technical interviews with data structure and algorithm practice.</p>
                <Link to="/docs/interviews/intro">Explore Interview Prep</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
