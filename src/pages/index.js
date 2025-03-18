import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
    <Head>
    <meta name="baidu-site-verification" content="codeva-hJyfN2UKgo" />
    <meta name="bytedance-verification-code" content="2e95RZyrkd7AwZPaKe0r" />
    <meta name="msvalidate.01" content="A4915626AC2C39CE0E42664E51229403" />
    </Head>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p >满怀期待地买一本书，无比激动地收藏一套课程，这种感觉很好，因为你感觉获得到了知识。然而这只是一种心理保健，重要的是你要去学习，而不是收集资料。克服了资料囤积症，你开始学习。你可能读了几本编程书籍的前几十页，但没有完成任何一本。你可能看了几集编程教程跟着写了几十行代码，但也没完成。遇到困难时，你在怀疑这样做对吗？这个教程是不是已经过时了？学习这门编程语言有用吗？从一个教程跳到另一个教程，重新学习同样的基本原理。反复重复以上的步骤，但从未跨越基本原理的学习，从未对习得的知识进行实际应用。你从一个泥潭陷入另一个泥潭，你陷入了“教程地狱”。你所需要的不是「200+ 免费在线课程」的清单,而是搞清楚应该学习什么，学习这些最好的课程书籍是什么，然后坚定不移的学习下去。学习之路必然不会一路都是坦途，你会遇到很多困难，庆幸的是困难总会被解决。所以你知道该怎么做了嘛？</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            let's go✊
          </Link>
        </div>
      </div>
    </header>
    </>
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
