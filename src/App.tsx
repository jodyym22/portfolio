import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Download, ExternalLink, Github, Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experiences';
import { achievements } from '@/data/achievements';
import { certificates } from '@/data/certificates';
import { skills } from '@/data/skills';

const sections = ['about', 'work', 'journey', 'certificates', 'contact'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Jody Mohamed home">
          <span className="wordmark-mark">JM</span>
          <span>Jody Mohamed<span className="wordmark-dot">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {sections.map((section) => <a key={section} href={`#${section}`} onClick={closeMenu}>{section}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-kicker"><span className="kicker-line" /> Jody Mohamed · Student portfolio · 2026</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Hello, I’m Jody</p>
              <h1>{profile.headline}</h1>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={17} /></a>
                <a className="text-link" href="#about">More about me <span>↓</span></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Abstract editorial artwork">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="planet"><span>curiosity</span></div>
              <div className="hero-stamp">01<br /><small>always<br />learning</small></div>
              <div className="hero-caption">Technology · STEM · People</div>
            </div>
          </div>
          <div className="hero-footer"><span>Based in {profile.location}</span><span className="scroll-note">Scroll to explore <span className="scroll-line" /></span><span>Open to learning opportunities</span></div>
        </section>

        <section id="about" className="about section-pad section-light">
          <div className="section-intro"><span className="section-number">01</span><div><p className="eyebrow">A little context</p><h2>Learning with<br /><em>purpose.</em></h2></div></div>
          <div className="about-layout">
            <div className="about-lead"><p>My interests sit where technology, science, creativity, and community meet.</p><p className="muted">I’m building my foundation one experience at a time — asking better questions, trying new tools, and learning how ideas can become useful for people.</p></div>
            <div className="about-details"><p>I’m a student at <strong>{profile.education}</strong>, exploring digital innovation, cybersecurity, STEM, programming, youth leadership, international education, languages, and cultural exchange.</p><p>My approach is simple: stay curious, learn by doing, and make room for other perspectives.</p><div className="learning-path"><div><b>01</b><strong>DECI</strong><span>Baraem Misr Digital · Ashbal Misr Digital, Level 2 · exploring cybersecurity next</span></div><div><b>02</b><strong>School</strong><span>Academic and extracurricular development at Egypt Future Official Distinguished Language School</span></div><div><b>03</b><strong>Tools</strong><span>Python · MIT App Inventor · Visual Studio Code · Excel · Google Slides</span></div></div><div className="detail-rule" /><span className="hand-note">still becoming →</span></div>
          </div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-heading-row"><div className="section-intro"><span className="section-number">02</span><div><p className="eyebrow">Selected work</p><h2>Ideas in<br /><em>motion.</em></h2></div></div><p className="heading-note">A growing archive of initiatives, research, and tools I’m learning to use — with status kept honest.</p></div>
          <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><span className="status-pill">{project.status}</span></div><div className="project-visual"><div className="visual-shape" /><span>{project.eyebrow}</span></div><div className="project-body"><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-meta"><span><b>Role</b>{project.role}</span><span><b>Tools</b>{project.technologies.join(' · ')}</span></div>{project.evidence ? <a className="card-link" href={project.evidence}>View evidence <ExternalLink size={14} /></a> : <span className="card-link muted-link">No public evidence link yet <ArrowUpRight size={14} /></span>}</div></article>)}</div>
        </section>

        <section id="journey" className="journey section-pad section-dark">
          <div className="section-heading-row"><div className="section-intro"><span className="section-number">03</span><div><p className="eyebrow">The journey so far</p><h2>Showing up,<br /><em>step by step.</em></h2></div></div><p className="heading-note">Accepted, participated, organized, and still in progress — every status tells a different part of the story.</p></div>
          <div className="timeline">{experiences.map((item, index) => <button className={`timeline-item ${expandedExperience === index ? 'expanded' : ''}`} key={`${item.title}-${item.date}`} onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}><span className="timeline-date">{item.date}</span><span className="timeline-marker" /><span className="timeline-content"><strong>{item.title}</strong><small>{item.place}</small><span className="timeline-detail">{item.detail}{'link' in item && (item.link ? <a className="timeline-link" href={item.link} target="_blank" rel="noreferrer">View GitHub project ↗</a> : <span className="timeline-link timeline-link-placeholder">{item.linkLabel}</span>)}</span></span><span className="timeline-status">{item.status}</span><ChevronDown className="timeline-chevron" size={18} /></button>)}</div>
          <div className="achievement-strip"><p className="eyebrow">Milestones, honestly labeled</p><div className="achievement-list">{achievements.map((item) => <div className={`achievement ${item.tone}`} key={item.title}><span className="achievement-label">{item.label}</span><strong>{item.title}</strong><small>{item.detail}</small></div>)}</div></div>
        </section>

        <section id="certificates" className="certificates section-pad section-light">
          <div className="section-heading-row"><div className="section-intro"><span className="section-number">04</span><div><p className="eyebrow">Proof of learning</p><h2>Certificates &<br /><em>records.</em></h2></div></div><p className="heading-note">A small, growing collection of verified learning moments. No inflated claims — just the record.</p></div>
          <div className="certificate-grid">{certificates.map((certificate) => <article className={`certificate-card ${certificate.tone}`} key={certificate.title}><div className="certificate-paper"><span className="certificate-seal">{certificate.category.slice(0, 2)}</span><p className="certificate-label">{certificate.category} · {certificate.date}</p><h3>{certificate.title}</h3><div className="certificate-line" /><p>{certificate.issuer}</p><small>{certificate.detail}</small><span className="certificate-sign">Jody Mohamed</span></div><div className="certificate-actions">{certificate.file ? <a href={certificate.file} target="_blank" rel="noreferrer"><Download size={15} /> Open certificate</a> : <span>Verified record · file not publicly linked</span>}</div></article>)}</div>
        </section>

        <section className="skills section-pad">
          <div className="skills-intro"><p className="eyebrow">The toolkit</p><h2>Curiosity is<br /><em>the common thread.</em></h2><p>Skills are not fixed labels here. They are areas I’m practicing, strengthening, and carrying into the next challenge.</p></div>
          <div className="skills-columns"><SkillGroup title="Technical" items={skills.technical} /><SkillGroup title="Personal" items={skills.personal} /><SkillGroup title="Interests" items={skills.interests} /><div className="language-group"><p className="eyebrow">Languages</p>{skills.languages.map((language) => <div className="language-row" key={language.name}><strong>{language.name}</strong><span>{language.level}</span></div>)}<p className="language-note">Language learning is ongoing → goals will grow with the journey</p></div></div>
        </section>

        <section className="future section-pad section-coral"><div className="future-number">05</div><div className="future-content"><p className="eyebrow">Where I’m heading</p><h2>Making space for<br /><em>what’s next.</em></h2><p className="future-copy">I’m interested in international STEM programs, cybersecurity, technology projects, youth leadership, educational opportunities abroad, language learning, and community impact.</p><blockquote>“{profile.quote}”</blockquote></div><div className="future-list"><span>International STEM</span><span>Cybersecurity</span><span>Youth leadership</span><span>Community impact</span></div></section>

        <section id="contact" className="contact section-pad section-dark"><div className="contact-top"><p className="eyebrow">06 · Say hello</p><h2>Let’s keep<br /><em>learning together.</em></h2><p className="contact-copy">For scholarship committees, youth initiatives, STEM programs, or simply a thoughtful conversation about the future.</p></div><div className="contact-links"><a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn <ArrowUpRight size={16} /></a><a href={profile.links.instagram} target="_blank" rel="noreferrer"><Instagram size={19} /> Instagram <ArrowUpRight size={16} /></a><a href={`mailto:${profile.links.email}`}><Mail size={19} /> Professional email <ArrowUpRight size={16} /></a><a href={profile.links.github} target="_blank" rel="noreferrer"><Github size={19} /> GitHub <ArrowUpRight size={16} /></a></div><footer className="site-footer"><span>© 2026 {profile.name}</span><span>Built with curiosity, not perfection.</span><a href="#top">Back to top ↑</a></footer></section>
      </main>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return <div className="skill-group"><p className="eyebrow">{title}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}

export default App;
