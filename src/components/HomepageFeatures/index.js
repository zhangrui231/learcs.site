import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '完整的学习路线',
    Svg: require('@site/static/img/road.svg').default,
    description: (
      <>
        大多数人采用的学习编程的方式是挑一个流行的编程语言，然后一头扎进去，然后就不知道下一步改做什么。
        极少的人会从一个路线图开始，路线图相当于编码世界的一张鸟瞰图，梳理了一些相关的编程概念、语言以及几乎100% 的开发者每天都会使用的工具。
      </>
    ),
  },
  {
    title: '最好的课程资源',
    Svg: require('@site/static/img/resourse.svg').default,
    description: (
      <>
        互联网上，到处都有许多的学习资源，然而精华与糟粕并存. 当你确定了要学习什么内容之后。你要确定对于这些内容，最好的书籍或者视频课程是什么?
        在CS自学社区里，我们尝试对这些问题做出确定的回答。
      </>
    ),
  },
  {
    title: '正确的学习方式',
    Svg: require('@site/static/img/methods.svg').default,
    description: (
      <>
        学习编程需要大量的实践，你必须快速摆脱教程地狱，然后进行大量的编码实践，使你能清晰的了解你不知道的事情，以至于你能清楚地表达出你想问的问题。
        学习编程是一个模糊的过程，要从一个又一个的错误信息中学习。在学习的过程中难免会迷失方向，甚至会感到沮丧。一个良好的社区可以归档大部分人都遇到的问题，可以伙伴们相互交流，可以提问寻求问题的解决方法。
        
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
