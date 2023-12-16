const description =
  "Welcome to my portfolio! As a dedicated and experienced full-stack web developer, I specialize in crafting seamless and robust web applications using cutting-edge technologies. My expertise spans across Node.js, Express.js, React.js, Next.js, Angular, Android, MongoDB, Firebase, SQL, and more.\n" +
  "\n" +
  "With a strong foundation in both front-end and back-end development, I bring ideas to life with a focus on performance, scalability, and user experience. Whether it's building dynamic single-page applications, implementing server-side rendering, or developing mobile apps for Android, I thrive on creating solutions that exceed expectations.\n" +
  "\n" +
  "Explore my portfolio to discover a showcase of projects highlighting my proficiency in responsive web design, API development, and database management. Leveraging the power of full-stack JavaScript, I embrace agile methodologies, version control with Git, and deployment automation to deliver high-quality software.\n" +
  "\n" +
  "In addition to technical prowess, I prioritize user-centric design, ensuring seamless navigation and optimal responsiveness across devices. My commitment to best practices, documentation, and staying abreast of the latest industry trends underscores my dedication to delivering excellence.\n" +
  "\n" +
  "If you're seeking a skilled full-stack web developer for your next project, let's connect. Together, we can turn your vision into a reality, leveraging the latest technologies and industry standards.";

const appConfig = {
  baseUrl: process.env.BASE_URL || "/",
  apiBase: process.env.API_BASE_URL || "/",
  seo: {
    htmlAttributes: { lang: "en" },
    defaultTitle: "Nurul - CodeCraftsman: Full-Stack Web Developer | Node.js, React, Angular, Mobile Apps",
    titleTemplate: "%s - Nurul",
    meta: [
      {
        name: "keywords",
        content:
          "nurul, nurul islam, nurul dev, nurul islam dev,nurul islam tipu, nurul islam tipu dev, Full-stack web developer, Node.js developer, Express.js developer, React.js developer, Next.js developer, React SSR (Server-Side Rendering) expert, Angular developer, Android app developer, MongoDB specialist, Firebase developer, SQL database expert, Web development portfolio, Front-end development, Back-end development, MEAN stack developer, MERN stack developer, Full-stack JavaScript, Mobile app development, Cross-platform development, Responsive web design, API development, Web application developer, Software engineer, Code optimization, RESTful API development, Progressive Web Apps (PWAs), UI/UX design, Single Page Applications (SPAs), Web performance optimization, Web security, Custom web solutions, Cloud-based development, DevOps practices, Version control (Git), Agile development, Scrum methodology, Test-driven development (TDD), Continuous integration (CI), Software architecture, Microservices, Serverless architecture, Responsive web design, Cross-browser compatibility, User authentication, Authorization systems, JWT (JSON Web Tokens), OAuth, Front-end frameworks, Back-end frameworks, Full-stack frameworks, Web development tools, Database management, Code versioning, API integration, Code collaboration, Application deployment, Performance monitoring, Error tracking, Debugging, Mobile-first development, Android app development, Progressive enhancement, Content Management Systems (CMS), E-commerce development, Real-time applications, Socket.IO, WebSockets, Responsive design, Client-side rendering, Server-side rendering, Cross-platform compatibility, Scalable web applications, Code refactoring, Responsive web design, Mobile optimization, Database design, NoSQL databases, Relational databases, API documentation, User experience (UX), User interface (UI), Front-end performance, Back-end performance, Web development best practices, Technical documentation, Quality assurance, Deployment automation, Web development trends, Mobile app trends, Full-stack frameworks, Technology stack, Code reviews, Software development lifecycle, Version control systems, SEO-friendly development, Code modularity, Progressive enhancement, Web accessibility, Cross-functional teams, Responsive images. ",
      },
      {
        name: "description",
        content: description,
      },
    ],
  },
};

export default appConfig;
