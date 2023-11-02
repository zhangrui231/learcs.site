import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        满怀期待地买一本编程书，无比激动地从网上收藏一套编程教程，这也许就是你学习编程以来最好的感觉。你可能读了几本编程书籍的前几十页，但没有完成任何一本。你可能看了几集编程教程跟着写了几十行代码，但没完成。你在怀疑这样做对吗？这个教程是不是已经过时了？学习这门编程语言有用吗？从一个教程跳到另一个教程，重新学习同样的基本原理。但从未跨越基本原理的学习，因为跨越基本原理需要一些真正的努力。所以你准备好努力学习了嘛?
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            let's go✊
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`自学编程 ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
