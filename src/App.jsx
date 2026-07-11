import { useState } from 'react';
import './App.css';

const profileImage =
  'https://static.wixstatic.com/media/2296b6_34c632e1db4c433c8a77a2075cb92964~mv2.png/v1/crop/x_0,y_33,w_1182,h_1297/fill/w_406,h_446,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/profile%20professional.png';

const SHOW_INVOLVEMENT = false; 

const navItems = [
  ['Experience', '#section-experience'],
  ...(SHOW_INVOLVEMENT ? [['Involvement', '#section-involvement']] : []),
  ['Education', '#section-education'],
  ['Skills', '#section-skills'],
  ['Projects', '#section-projects'],
  ['Contact', '#section-contact'],
];

const stats = [
  ['4+', 'Years at Goldman Sachs'],
  ['3.9', 'Columbia GPA'],
  ['6+', 'Projects Shipped'],
  ['20+', 'Technologies'],
];

const experiences = [
  {
    date: '2022 - 2025',
    company: 'Goldman Sachs',
    role: 'Software Engineer (Associate) · Software Engineer (Analyst)',
    badge: 'Investment Banking Engineering · AI Applications · Marcus',
    awards: [
      "Chair of Goldman's Junior Engineering Committee",
      { text: 'Recipient of Goldman Sachs Cultural Award', color: 'purple' },
    ],
    featured: true,
  },
  {
    date: '2021',
    company: 'Goldman Sachs',
    role: 'Engineering Intern',
  },
  {
    date: '2020',
    company: 'Apple',
    role: 'Software Engineering Intern',
  },
  {
    date: '2021',
    company: 'Computer-Enabled Abilities Laboratory',
    role: 'Software Developer · Columbia University',
    badge: 'Research & Development',
  },
  {
    date: '2019 - 2020',
    company: 'Alinea Invest',
    role: 'Early Engineer',
    badge: 'YC \'23 Startup',
  },
  {
    date: '2019 - 2021',
    company: 'Columbia University',
    role: 'Head Teaching Assistant',
    badge: 'Python · Artificial Intelligence',
  },
  {
    date: '2019',
    company: 'Columbia Computer Vision Multimedia Lab',
    role: 'Computer Vision Researcher',
  },
  {
    date: '2018',
    company: 'University of California, Berkeley',
    role: 'AR/VR Research Intern',
  },
  {
    date: '2017',
    company: "Harvard Medical School & Brigham and Women's Hospital",
    role: 'Medical AI Research Intern',
  },
];

const involvements = [
  {
    title: 'Fireside Chat with Marco Argenti',
    org: 'Goldman Sachs',
    year: '2026',
    role: 'Moderator',
    description:
      "Hosted a fireside chat with Goldman Sachs' Chief Information Officer on AI, engineering culture, and career growth.",
    image: 'https://picsum.photos/seed/fireside/240/180',
  },
  {
    title: 'Decoding the Business: Understanding Global Banking Markets, Asset Wealth Management, and Platform Solutions',
    org: 'Goldman Sachs',
    year: '2026',
    role: 'Speaker',
    description:
      "Gave a firm-wide talk breaking down Goldman's three business lines and how engineering powers each of them.",
    image: 'https://picsum.photos/seed/decoding/240/180',
  },
  {
    title: 'GS Alumni in the Startup World',
    org: 'Goldman Sachs',
    year: '2026',
    role: 'Host',
    description:
      'Hosted a conversation with Goldman alumni who founded and joined startups, on making the leap from finance to founding.',
    image: 'https://picsum.photos/seed/alumni/240/180',
  },
  {
    title: 'Building User Interfaces for AI Applications',
    org: 'Goldman Sachs',
    year: '2025',
    role: 'Speaker',
    description:
      'Talk on designing and building user interfaces for AI products, from streaming responses to human-in-the-loop patterns.',
    image: 'https://picsum.photos/seed/buildui/240/180',
  },
  {
    title: 'Prompt Engineering',
    org: 'Goldman Sachs',
    year: '2025',
    role: 'Speaker',
    description:
      'Hands-on session for engineers on prompt engineering techniques for LLM applications in production.',
    image: 'https://picsum.photos/seed/prompt/240/180',
  },
  {
    title: 'NIC Mentorship Panel',
    org: 'Goldman Sachs',
    year: '2025',
    role: 'Panelist',
    description:
      'Spoke on a panel about mentorship — finding mentors, being one, and growing as a junior engineer at the firm.',
    image: 'https://picsum.photos/seed/mentorship/240/180',
  },
  {
    title: 'NIC Global Leadership Forum',
    org: 'Goldman Sachs',
    year: '2026',
    role: 'Organizer',
    description:
      'Organized the end-of-year showcase celebrating projects and community initiatives from across the committee.',
    image: 'https://picsum.photos/seed/showcase/240/180',
  },
  {
    title: 'NIC Networking Panel',
    org: 'Goldman Sachs',
    year: '2025',
    role: 'Panelist',
    description:
      'Panel discussion on building a network across divisions and making the most of the analyst community.',
    image: 'https://picsum.photos/seed/networking/240/180',
  },
  {
    title: 'NIC AI Hackathon',
    org: 'Goldman Sachs',
    year: '2026',
    role: 'Organizer',
    description:
      'Helped organize an AI hackathon for engineers across the firm to prototype Gen AI applications.',
    image: 'https://picsum.photos/seed/hackathon/240/180',
  },
  {
    title: 'NIC Year End Showcase',
    org: 'Goldman Sachs',
    year: '2026',
    role: 'Organizer',
    description:
      'Organized the end-of-year showcase celebrating projects and community initiatives from across the committee.',
    image: 'https://picsum.photos/seed/showcase/240/180',
  },
];

const education = [
  {
    year: '2018 - 2022',
    school: 'Columbia University',
    degree: 'B.S. in Computer Science · New York, NY',
    pills: ['Dean\'s List', "GPA: 3.9", 'AI / NLP', 'Databases'],
    primary: true,
  },
  {
    year: '2014 - 2018',
    school: 'Lynbrook High School',
    degree: 'High School Diploma · San Jose, CA',
    pills: ['Valedictorian', 'GPA: 4.0', 'SAT II Math & Physics: 800','ACT: 35'],
  },
];

const skillGroups = [
  {
    title: 'AI / ML',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'RAG', 'MCP', 'ADK', 'Computer Vision', 'NLP', 'MATLAB', 'Research'],
    highlights: ['Python', 'TensorFlow', 'Computer Vision', 'NLP'],
  },
  {
    title: 'Engineering',
    skills: [
      'Java',
      'C / C++',
      'TypeScript',
      'SQL',
      'GraphQL',
      'Swift',
      'React',
      'FastAPI',
      'Flask',
      'AWS',
      'Docker',
      'K8s',
      'Kafka',
      'Snowflake',
      'Elasticsearch',
      'MySQL',
      'Git',
      'iOS',
    ],
    highlights: ['Java', 'C / C++'],
  },
  {
    title: 'Finance & Tools',
    skills: ['Excel', 'Financial Modeling', 'Figma', 'HTML / CSS / JS', 'Photoshop', 'SolidWorks'],
    highlights: ['Excel', 'Financial Modeling'],
  },
];

const projects = [
  {
    title: 'RESP First Responder App',
    href: 'https://github.com/msradam/resp-api',
    description:
      'Application for 1st responders to reconnect disaster victims with family members and administer psychological first aid.',
    tag: 'Full-Stack · Humanitarian Tech',
  },
  {
    title: 'Engineering 3D Phantom',
    description:
      'Patient-specific 3D phantom to validate robotic-guided needle-insertion prostate cancer biopsy through MRI using AI segmentation.',
    tag: 'Medical AI · Robotics',
  },
  {
    title: 'ACL Inertial Knee Brace',
    description:
      'Integrated Mbientlab inertial sensors into a knee brace to collect movement data and prevent ACL tears in athletes.',
    tag: 'IoT · Wearables · Sports Tech',
  },
  {
    title: 'Political Visual Literacy',
    description:
      'TensorFlow ML pipelines using Faster RCNN and Google Object Detection to identify extremist group symbols.',
    tag: 'Computer Vision · TensorFlow',
  },
  {
    title: 'Space Jam',
    href: 'https://www.youtube.com/watch?v=z3NT4RAedZU',
    description:
      'Backboard shooter game using SolidWorks, Arduino, IR beams, laser cutting, and 3D printing for Art of Engineering.',
    tag: 'Hardware · Arduino · CAD',
  },
  {
    title: 'Cell Virus Simulation',
    description:
      'Simulation of a controlled epidemic in NYC with calculated probabilities for infection, resistance, recovery, and transmission.',
    tag: 'Simulation · Epidemiology',
  },
];

function SectionHeader({ tag, title }) {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </div>
  );
}

function Nav({ mobileOpen, onToggleMobile, onCloseMobile }) {
  return (
    <>
      <nav id="redesign-nav">
        <a className="nav-logo" href="#redesign-hero" onClick={onCloseMobile}>
          Jessica Peng
        </a>
        <ul className="nav-links">
          {navItems.map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <button
          id="mobile-menu-btn"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={onToggleMobile}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div id="mobile-nav-drawer" className={mobileOpen ? 'open' : ''}>
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={onCloseMobile}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="redesign-hero">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-badge">AI Engineer · Fintech</div>
          <h1 className="hero-name">
            Jessica Peng
          </h1>
          <p className="hero-title">
            <strong>AI Software Engineer</strong> at Goldman Sachs
          </p>
          <p className="hero-description">
             Columbia University CS graduate developing Gen AI applications within Investment Banking at Goldman Sachs. ​
          </p>
          <div className="hero-tags">
            <span className="hero-tag">Machine Learning</span>
            <span className="hero-tag">NLP</span>
            <span className="hero-tag">Computer Vision</span>
            <span className="hero-tag">Multi-Agent</span>
            <span className="hero-tag">RAG</span>
            <span className="hero-tag">Financial Engineering</span>
            <span className="hero-tag">Investment Banking</span>
            <span className="hero-tag">Gen AI</span>



          </div>
          <div className="hero-cta">
            <a href="mailto:jessica9peng@gmail.com" className="btn-primary">
              Get In Touch
            </a>
            <a href="https://github.com/jessicapeng" className="btn-secondary" target="_blank" rel="noreferrer">
              GitHub →
            </a>
          </div>
        </div>

        <div className="hero-card">
          <img src={profileImage} className="hero-card-photo" alt="Jessica Peng" />
          <div className="hero-card-name">Jessica Peng</div>
          <div className="hero-card-role">AI Software Engineer</div>
          <hr className="hero-card-divider" />
          <div className="hero-card-info">
            <InfoItem label="Company" value="Goldman Sachs" />
            <InfoItem label="Education">
              CS, Columbia University
            </InfoItem>
            <InfoItem label="Email">
              <a href="mailto:jessica9peng@gmail.com">jessica9peng@gmail.com</a>
            </InfoItem>
            <InfoItem label="GitHub">
              <a href="https://github.com/jessicapeng" target="_blank" rel="noreferrer">
                github.com/jessicapeng
              </a>
            </InfoItem>
            <InfoItem label="LinkedIn">
              <a href="https://www.linkedin.com/in/pengjessica" target="_blank" rel="noreferrer">
                linkedin.com/in/pengjessica
              </a>
            </InfoItem>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value, children }) {
  return (
    <div className="hero-info-item">
      <span className="hero-info-label">{label}</span>
      <span className="hero-info-value">{children || value}</span>
    </div>
  );
}

function Stats() {
  return (
    <div id="redesign-stats">
      {stats.map(([number, label]) => (
        <div className="stat-item" key={label}>
          <div className="stat-number">{number}</div>
          <div className="stat-label">{label}</div>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <div id="section-experience">
      <section className="section section-narrow">
        <SectionHeader tag="Career"  />
        <div className="timeline">
          {experiences.map((item) => (
            <div className={`timeline-item${item.featured ? ' featured' : ''}`} key={`${item.company}-${item.date}`}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-company">{item.company}</div>
              <div className="timeline-role">{item.role}</div>
              {item.badge && <span className="timeline-badge">{item.badge}</span>}
              {item.awards && (
                <div className="timeline-awards">
                  {item.awards.map((award) => {
                    const text = typeof award === 'string' ? award : award.text;
                    const color = typeof award === 'string' ? '' : ` ${award.color}`;
                    return (
                      <span className={`timeline-award${color}`} key={text}>
                        {text}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Involvement() {
  return (
    <div id="section-involvement">
      <section className="section section-narrow">
        <SectionHeader tag="Events & Leadership" />
        <div className="involvement-rows">
          {involvements.map((event) => (
            <div className="involvement-row" key={event.title}>
              <img src={event.image} alt={event.title} className="involvement-img" />
              <div className="involvement-body">
                <div className="involvement-row-title">
                  {event.title}
                  <span className="involvement-role">{event.role}</span>
                </div>
                <div className="involvement-meta">
                  {event.org} · {event.year}
                </div>
                <div className="involvement-desc">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Education() {
  return (
    <div id="section-education">
      <section className="section section-narrow">
        <SectionHeader tag="Education" />
        <div className="edu-grid">
          {education.map((item) => (
            <div className={`edu-card${item.primary ? ' primary' : ''}`} key={item.school}>
              <div className="edu-year">{item.year}</div>
              <div className="edu-school">{item.school}</div>
              <div className="edu-degree">{item.degree}</div>
              <div className="edu-meta">
                {item.pills.map((pill) => (
                  <span className={`edu-pill${pill.includes('Dean') || pill === 'Valedictorian' ? ' gold' : ''}`} key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Skills() {
  return (
    <div id="section-skills">
      <section className="section section-narrow">
        <SectionHeader tag="Skills" />
        <div className="skills-categories">
          {skillGroups.map((group) => (
            <div className="skill-category" key={group.title}>
              <div className="skill-cat-title">{group.title}</div>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span className={`skill-pill${group.highlights.includes(skill) ? ' highlight' : ''}`} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Projects() {
  return (
    <div id="section-projects">
      <section className="section section-wide">
        <SectionHeader tag="Projects"/>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-body">
                <h3 className="project-card-title">
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <div className="project-card-desc">{project.description}</div>
                <span className="project-tag">{project.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <section id="section-contact">
      <span className="contact-tag">Let's Connect</span>
      <h2>Get In Touch</h2>
      <p>Interested in collaborating? I'd love to hear from you.</p>
      <form className="contact-form" action="mailto:jessica9peng@gmail.com" method="post" encType="text/plain">
        <input type="text" name="firstName" placeholder="First Name" aria-label="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" aria-label="Last Name" />
        <input type="email" name="email" placeholder="Email Address" aria-label="Email Address" className="span-all" />
        <textarea name="message" placeholder="Your message..." aria-label="Your message" />
        <div className="form-submit">
          <button type="submit">Send Message</button>
        </div>
      </form>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/pengjessica" className="footer-social-link" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/jessicapeng" className="footer-social-link" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:jessica9peng@gmail.com" className="footer-social-link">
          Email
        </a>
      </div>
      <div className="footer-copy">© 2026 Jessica Peng · AI Software Engineer</div>
    </section>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div id="redesign-root">
      <Nav
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((open) => !open)}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <main>
        <Hero />
        {/* <Stats /> */}
        <Experience />
        {SHOW_INVOLVEMENT && <Involvement />}
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
