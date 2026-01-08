import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Smart Construction Management',
    Image: require('@site/static/img/system.png').default,
    description: (
      <>Streamline your project workflows, scheduling, and resource allocation effortlessly.</>
    ),
  },
  {
    title: 'Data Security First',
    Image: require('@site/static/img/security.png').default,
    description: (
      <>We follow enterprise-grade security protocols to keep your data safe and compliant.</>
    ),
  },
  {
    title: 'Work Breakdown Structure (WBS)',
    Image: require('@site/static/img/wbs.png').default,
    description: (
      <>Break complex projects into manageable phases, cost codes, and sub-cost codes.</>
    ),
  },
];

function Feature({ Image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} className={styles.featureSvg} alt={title} />
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
