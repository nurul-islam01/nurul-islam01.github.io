import React from 'react';

import SectionTitle from '@/components/atoms/SectionTitle';

import styles from './i-do.module.css';

const does = [
  {
    icon: 'linecons linecons-pen',
    title: 'Web Development',
    desc:
      'As a Full Stack Node.js developer, I specialize in crafting engaging and responsive web applications. From sleek user interfaces to powerful server-side logic, I bring a holistic approach to web development, ensuring seamless and dynamic user experiences.\n' +
      '                      '
  },
  {
    icon: 'linecons linecons-shop',
    title: 'Database Management',
    desc: 'In the realm of database management, I shine in both NoSQL and relational databases. From designing optimized data structures to ensuring smooth data flow, my proficiency spans MongoDB to SQL databases. I bring a keen focus on database performance, security, and scalability.'
  },
  {
    icon: 'linecons linecons-display',
    title: 'RESTful API Development',
    desc: 'My expertise extends to the realm of RESTful API development, where I excel in designing and implementing robust interfaces that facilitate efficient communication between different components. Leveraging Node.js, I create APIs that are not just functional but also scalable and adaptable.'
  },
  {
    icon: 'linecons linecons-megaphone',
    title: 'DevOps and Deployment',
    desc: "As a Full Stack Node.js developer, I'm well-versed in the intricacies of DevOps and deployment. Leveraging tools like Docker and expertise in cloud platforms such as AWS and Heroku, I streamline deployment processes, ensure continuous integration, and maintain a robust development environment for efficient project workflows."
  }
];

const IDo = () => (
  <section className={`${styles.base} content`}>
    <SectionTitle title="What I Do" />
    <div className={styles.does}>
      {does.map(({ icon, title, desc }, i) => (
        <div className={styles['does-item']} key={i}>
          <div className={styles.icon}>
            <i className={icon} />
          </div>
          <div className={styles['item-info']}>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default IDo;
