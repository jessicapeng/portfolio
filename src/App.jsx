import { useState } from 'react';
import './App.css';

const profileImage =
  'https://static.wixstatic.com/media/2296b6_34c632e1db4c433c8a77a2075cb92964~mv2.png/v1/crop/x_0,y_33,w_1182,h_1297/fill/w_406,h_446,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/profile%20professional.png';

const navItems = [
  ['Experience', '#section-experience'],
  ['Education', '#section-education'],
  ['Skills', '#section-skills'],
  ['Projects', '#section-projects'],
  ['Contact', '#section-contact'],
];

const stats = [
  ['3+', 'Years at Goldman Sachs'],
  ['3.9', 'Columbia GPA'],
  ['6+', 'Projects Shipped'],
  ['20+', 'Technologies'],
];

const experiences = [
  {
    date: '2022 - 2025',
    company: 'Goldman Sachs',
    role: 'Software Engineer (Associate) · Software Engineer (Analyst)',
    badge: 'Investment Banking Engineering · AI Applications',
    featured: true,
  },
  {
    date: '2021',
    company: 'Goldman Sachs',
    role: 'Engineering Analyst',
    badge: 'Engineering Division',
    featured: true,
  },
  {
    date: '2020',
    company: 'Apple',
    role: 'Software Engineering Intern',
    badge: 'Software Engineering',
  },
  {
    date: '2021',
    company: 'Computer-Enabled Abilities Laboratory',
    role: 'Software Developer · Columbia University',
    badge: 'Research & Development',
  },
  {
    date: '2019 - 2021',
    company: 'Columbia University',
    role: 'Head Teaching Assistant',
    badge: 'Computer Science',
  },
  {
    date: '2019',
    company: 'Columbia Computer Vision Multimedia Lab',
    role: 'Research Intern',
    badge: 'Computer Vision · AI Research',
  },
  {
    date: '2018',
    company: 'University of California, Berkeley',
    role: 'Research Intern',
    badge: 'Research',
  },
  {
    date: '2017',
    company: "Harvard Medical School & Brigham and Women's Hospital",
    role: 'Research Intern',
    badge: 'Medical AI Research',
  },
];

const education = [
  {
    year: '2018 - 2022',
    school: 'Columbia University',
    degree: 'B.S. in Computer Science · New York, NY',
    pills: ['GPA: 3.9', "Dean's List", 'AI / NLP', 'Databases'],
    primary: true,
  },
  {
    year: '2014 - 2018',
    school: 'Lynbrook High School',
    degree: 'High School Diploma · San Jose, CA',
    pills: ['Valedictorian', 'GPA: 4.0', 'ACT: 35'],
  },
];

const skillGroups = [
  {
    title: 'AI / ML',
    skills: ['Python', 'TensorFlow', 'Computer Vision', 'NLP', 'MATLAB', 'Research'],
    highlights: ['Python', 'TensorFlow', 'Computer Vision', 'NLP'],
  },
  {
    title: 'Engineering',
    skills: ['Java', 'C / C++', 'React', 'Flask', 'MySQL', 'Git', 'iOS'],
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
    icon: '🚑',
    title: 'RESP — First Responder App',
    href: 'https://github.com/msradam/resp-api',
    description:
      'Application for 1st responders to reconnect disaster victims with family members and administer psychological first aid.',
    tag: 'Full-Stack · Humanitarian Tech',
    background: 'linear-gradient(135deg,#e8f0fe,#c7d7fb)',
  },
  {
    icon: '🧬',
    title: 'Engineering 3D Phantom',
    description:
      'Patient-specific 3D phantom to validate robotic-guided needle-insertion prostate cancer biopsy through MRI using AI segmentation.',
    tag: 'Medical AI · Robotics',
    background: 'linear-gradient(135deg,#f0f4ff,#dde8ff)',
  },
  {
    icon: '🦵',
    title: 'Inertial Knee Brace',
    description:
      'Integrated Mbientlab inertial sensors into a knee brace to collect movement data and prevent ACL tears in athletes.',
    tag: 'IoT · Wearables · Sports Tech',
    background: 'linear-gradient(135deg,#e8f8f4,#c7f0e4)',
  },
  {
    icon: '🔍',
    title: 'Political Visual Literacy',
    description:
      'TensorFlow ML pipelines using Faster RCNN and Google Object Detection to identify extremist group symbols.',
    tag: 'Computer Vision · TensorFlow',
    background: 'linear-gradient(135deg,#fff0f0,#ffd7d7)',
  },
  {
    icon: '🏀',
    title: 'Space Jam',
    href: 'https://www.youtube.com/watch?v=z3NT4RAedZU',
    description:
      'Backboard shooter game using SolidWorks, Arduino, IR beams, laser cutting, and 3D printing for Art of Engineering.',
    tag: 'Hardware · Arduino · CAD',
    background: 'linear-gradient(135deg,#fff8e8,#ffedc7)',
  },
  {
    icon: '🦠',
    title: 'Cell Virus Simulation',
    description:
      'Simulation of a controlled epidemic in NYC with calculated probabilities for infection, resistance, recovery, and transmission.',
    tag: 'Simulation · Epidemiology',
    background: 'linear-gradient(135deg,#f0f0ff,#d7d7ff)',
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
          <span />
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
          <div className="hero-badge">AI Engineer · Finance</div>
          <h1 className="hero-name">
            Jessica
            <br />
            <span className="accent">Peng</span>
          </h1>
          <p className="hero-title">
            <strong>AI Software Engineer</strong> at Goldman Sachs
          </p>
          <p className="hero-description">
            Building intelligent systems at the intersection of artificial intelligence and investment
            banking. Columbia CS graduate developing cutting-edge AI applications for financial
            engineering.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">🤖 Machine Learning</span>
            <span className="hero-tag">💹 Investment Banking</span>
            <span className="hero-tag">🧠 NLP / LLMs</span>
            <span className="hero-tag">📊 Financial Engineering</span>
            <span className="hero-tag">🔬 Computer Vision</span>
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
            <InfoItem label="Education" value="Columbia University, CS" />
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
        <SectionHeader tag="Career" title="Experience" />
        <div className="timeline">
          {experiences.map((item) => (
            <div className={`timeline-item${item.featured ? ' featured' : ''}`} key={`${item.company}-${item.date}`}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-company">{item.company}</div>
              <div className="timeline-role">{item.role}</div>
              <span className="timeline-badge">{item.badge}</span>
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
        <SectionHeader tag="Academic" title="Education" />
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
        <SectionHeader tag="Expertise" title="Skills" />
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
        <SectionHeader tag="Portfolio" title="Projects" />
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-img-placeholder" style={{ background: project.background }}>
                {project.icon}
              </div>
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
      <p>Interested in collaborating on AI or fintech projects? I'd love to hear from you.</p>
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
        <Stats />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
