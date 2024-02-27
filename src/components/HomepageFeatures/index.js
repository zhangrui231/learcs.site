import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '完整的学习路线',
    Svg: require('@site/static/img/road.svg').default,
    description: (
      <>
        学习编程不仅仅是学一门语言，大多数人采用的学习方式是挑一个流行的编程语言，然后一头扎进去。
        极少的人会从一个路线图开始，路线图相当于编码世界的一张鸟瞰图，梳理了需要掌握的计算机学科基础知识、编程语言以及相关联的技术栈和几乎100% 的开发者每天都会使用的工具。
      </>
    ),
  },
  {
    title: '最好的课程资源',
    Svg: require('@site/static/img/resourse.svg').default,
    description: (
      <>
        互联网上，到处都有许多的学习资源，然而精华与糟粕并存。当你确定了要学习什么内容之后，你要确定对于这些内容，最好的书籍或者视频课程是什么?
        在CS自学社区里，我们尝试对这些问题做出确定的回答。
      </>
    ),
  },
  {
    title: '正确的学习方式',
    Svg: require('@site/static/img/methods.svg').default,
    description: (
      <>
        根据学习金字塔理论，通过观看视频或阅读，我们只能记住30%的内容。但是，当我们亲自动手实践时，这个比例可以提升到75%。因此，务必完成课程中的实验、作业和项目，这些实践活动是提高学习效果的关键。如果你想彻底掌握CS核心课并达到90%的留存率，建议你整理所学知识，制作成博文或视频，然后教给他人。
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
