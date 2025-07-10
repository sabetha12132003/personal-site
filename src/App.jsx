import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const [bookImageIndex, setBookImageIndex] = useState(0);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const bookImages = ["/book-recs-1.png", "/book-recs-2.png"];

  const [medImageIndex, setMedImageIndex] = useState(0);
  const [isMedModalOpen, setIsMedModalOpen] = useState(false);
  const medImages = ["/med-1.png", "/med-2.png"];

  const [retailImageIndex, setRetailImageIndex] = useState(0);
  const [isRetailModalOpen, setIsRetailModalOpen] = useState(false);
  const retailImages = ["/retail-1.png", "/retail-2.png"];

  const [blogIndex, setBlogIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const blogs = [
    {
      num: "01",
      title: "Things I Wish I Knew Before My First Internship",
      description: "From navigating office dynamics to technical challenges, here are the lessons I learned the hard way during my first tech internship experience...",
      date: "15 July 2025",
      tags: ["Career", "Internship"],
      bgImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      num: "02", 
      title: "Building My First Full-Stack App",
      description: "From concept to deployment, here's how I built my OpenAI-powered book recommendation system using React, Node.js, and modern web technologies...",
      date: "8 July 2025",
      tags: ["React", "OpenAI"],
      bgImg: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      num: "03",
      title: "What No One Tells You About Being a Woman in Tech", 
      description: "The unspoken challenges, unexpected joys, and real experiences of navigating the tech industry as a woman. Honest reflections on my journey...",
      date: "1 July 2025",
      tags: ["Women in Tech", "Career"],
      bgImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const maxIndex = windowWidth <= 768 ? blogs.length - 1 : blogs.length - 4;

  const [aboutFlipped, setAboutFlipped] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName)
  }

  const skills = [
    "React", "Node.js", "JavaScript", "Python", "C/C++", "Java", "HTML", "CSS", "Tailwind CSS", 
    "MongoDB", "Git", "Express.js", "REST APIs", "OpenAI API", "Data Structures", "Algorithms", 
    "Jira", "OracleDB", "MySQL"
  ]

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-links">
          <a 
            href="#home" 
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </a>
          <a 
            href="#blogs" 
            className={`nav-link ${activeLink === 'blogs' ? 'active' : ''}`}
            onClick={() => handleLinkClick('blogs')}
          >
            Blogs
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </div>
      </nav>

      <section id="home" className="home-section">
        <div className="home-content">
          <div className="title-section">
            <motion.img
              src="/star-2.svg"
              className="star star-top-right"
              alt="star"
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 80 }}
            />
            <motion.h1
              className="name"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.05, type: 'spring', stiffness: 60 }}
            >
              Hi, I'm Sabetha Somaskanthan
            </motion.h1>
            <motion.p
              className="title"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 60 }}
            >
              I'm an aspiring developer and just a girl who enjoys creating with code!
            </motion.p>
            <motion.img
              src="/star-2.svg"
              className="star star-bottom-left"
              alt="star"
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 80 }}
            />
          </div>
          <div className="blob-container">
            <motion.svg
              className="blob-svg"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.05, type: 'spring', stiffness: 60 }}
            >
              <defs>
                <clipPath id="blob-clip">
                  <path d="M39.6,-38.8C53.3,-25.9,67.8,-12.9,69.8,2C71.9,17,61.4,34,47.7,45.2C34,56.5,17,62,-1.8,63.8C-20.6,65.6,-41.1,63.6,-53,52.4C-64.9,41.1,-68.1,20.6,-66.7,1.4C-65.3,-17.8,-59.3,-35.5,-47.4,-48.5C-35.5,-61.4,-17.8,-69.5,-2.4,-67.1C12.9,-64.7,25.9,-51.7,39.6,-38.8Z" transform="translate(100 100)" />
                </clipPath>
              </defs>
              
              <image
                href="/IMG_5396.JPG"
                width="160"
                height="160"
                x="20"
                y="20"
                clipPath="url(#blob-clip)"
                preserveAspectRatio="xMidYMid slice"
              />
              
              <path 
                fill="rgba(255, 255, 255, 0.1)" 
                d="M39.6,-38.8C53.3,-25.9,67.8,-12.9,69.8,2C71.9,17,61.4,34,47.7,45.2C34,56.5,17,62,-1.8,63.8C-20.6,65.6,-41.1,63.6,-53,52.4C-64.9,41.1,-68.1,20.6,-66.7,1.4C-65.3,-17.8,-59.3,-35.5,-47.4,-48.5C-35.5,-61.4,-17.8,-69.5,-2.4,-67.1C12.9,-64.7,25.9,-51.7,39.6,-38.8Z" 
                transform="translate(100 100)" 
              />
            </motion.svg>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <div className="education-card">
            <div className={`flip-card-inner${aboutFlipped ? ' flipped' : ''}`} onClick={() => setAboutFlipped(f => !f)} style={{cursor: 'pointer'}}>
              <div className="flip-card-front">
                <span className="about-info-icon"><i className="fas fa-info-circle"></i></span>
                <h3>About Me</h3>
                <p>I'm a Computer Science graduate who’s passionate about using technology to solve real-world problems, not just for efficiency, but for people. I'm drawn to clean design, curious about AI, and excited to learn something that challenges how I think.
I’m curious by nature, always learning something new, and driven by the idea that great tech should be accessible to everyone. When I'm not coding, you’ll find me exploring design, journaling random ideas, or figuring out how things work just for fun.</p>
              </div>
              <div className="flip-card-back">
                <div className="education-header">
                  <img src="/tmu.png" alt="TMU Logo" className="tmu-logo" />
                  <div className="education-text">
                    <h3 className="education-title">🎓 BSc in Computer Science</h3>
                    <p className="university">Toronto Metropolitan University</p>
                    <p className="year">2023 – 2025 </p>
                  </div>
                </div>
                <ul className="coursework">
                  <li>Relevant Coursework: Data Structures, Web Dev, AI</li>
                  <li>Dean's List (2024/2025)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill} className="skill-bubble">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects Hero Section */}
      <section id="projects" className="projects-hero">
        <div className="projects-hero-content">
          <motion.h1
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Coding has become more than just a skill, it’s how I bring ideas to life, solve real problems, and continuously grow as a developer. Each project here reflects that passion, whether it's experimenting with new frameworks, writing clean and scalable code, or building intuitive, user-focused solutions that serve a purpose.
          </motion.p>
        </div>
      </section>

      {/* Projects About Section */}
      <section className="projects-about">
        <div className="projects-about-content">
          <div className="project-sections-horizontal">
            <div className="project-section">
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">OpenAI</span>
                <span className="project-tag">Tailwind CSS</span>
                <span className="project-tag">Netlify</span>
              </div>
              <div className="project-title">OpenAI-Powered Book Explorer</div>
              <p>A full-stack web app powered by OpenAI, offering personalized book recommendations through a conversational chatbot. Like “Netflix for books,” it lets users explore and discover titles based on their preferences, mood, or favorite genres.</p>
              <div className="slideshow-container">
                <button className="arrow-btn left-arrow" onClick={() => setBookImageIndex(bookImageIndex === 0 ? 1 : 0)}><span className="arrow-icon">‹</span></button>
                <img
                  src={bookImages[bookImageIndex]}
                  alt="Book Explorer Screenshot"
                  className="main-image"
                  style={{ objectFit: "cover", cursor: "pointer" }}
                  onClick={() => setIsBookModalOpen(true)}
                />
                <button className="arrow-btn right-arrow" onClick={() => setBookImageIndex(bookImageIndex === 1 ? 0 : 1)}><span className="arrow-icon">›</span></button>
              </div>
              <div className="project-links">
                <a href="https://github.com/sabetha12132003/book-recs" className="project-link-btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://books-recs.netlify.app/" className="project-link-btn live-btn" target="_blank" rel="noopener noreferrer">Live App</a>
              </div>
            </div>
            <div className="vertical-divider"></div>
            <div className="project-section">
              <div className="project-tags">
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">Bootstrap</span>
                <span className="project-tag">Express</span>
                <span className="project-tag">JavaScript</span>
              </div>
              <div className="project-title">FDA Medication Lookup Tracker</div>
              <p>A web application that lets logged-in users search medications in real-time using FDA data and save them to a personal collection. Users can view detailed info including dosage, side effects, and more for medication tracking and awareness.</p>
              <div className="slideshow-container">
                <button className="arrow-btn left-arrow" onClick={() => setMedImageIndex(medImageIndex === 0 ? 1 : 0)}><span className="arrow-icon">‹</span></button>
                <img
                  src={medImages[medImageIndex]}
                  alt="Medication Tracker Screenshot"
                  className="main-image"
                  style={{ objectFit: "cover", cursor: "pointer" }}
                  onClick={() => setIsMedModalOpen(true)}
                />
                <button className="arrow-btn right-arrow" onClick={() => setMedImageIndex(medImageIndex === 1 ? 0 : 1)}><span className="arrow-icon">›</span></button>
              </div>
              <div className="project-links">
                <a href="https://github.com/sabetha12132003/med-lookup" className="project-link-btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="vertical-divider"></div>
            <div className="project-section">
              <div className="project-tags">
                <span className="project-tag">Java</span>
                <span className="project-tag">MySQL</span>
                <span className="project-tag">OracleDB</span>
              </div>
              <div className="project-title">Store Management GUI</div>
              <p>A Java web-based GUI for managing a Clothing Retail Store using an SQL database. Users can efficiently handle customers, orders, products, and suppliers. The system supports inventory tracking, order processing, and sales reporting.</p>
              <div className="slideshow-container">
                <button className="arrow-btn left-arrow" onClick={() => setRetailImageIndex(retailImageIndex === 0 ? 1 : 0)}><span className="arrow-icon">‹</span></button>
                <img
                  src={retailImages[retailImageIndex]}
                  alt="Retail Manager Screenshot"
                  className="main-image"
                  style={{ objectFit: "cover", cursor: "pointer" }}
                  onClick={() => setIsRetailModalOpen(true)}
                />
                <button className="arrow-btn right-arrow" onClick={() => setRetailImageIndex(retailImageIndex === 1 ? 0 : 1)}><span className="arrow-icon">›</span></button>
              </div>
              <div className="project-links">
                <a href="https://github.com/sabetha12132003/oracle-java-project" className="project-link-btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isBookModalOpen && (
        <div className="modal-overlay" onClick={() => setIsBookModalOpen(false)}>
          <img
            src={bookImages[bookImageIndex]}
            alt="Book Explorer Screenshot"
            className="modal-image"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
      {isMedModalOpen && (
        <div className="modal-overlay" onClick={() => setIsMedModalOpen(false)}>
          <img
            src={medImages[medImageIndex]}
            alt="Medication Tracker Screenshot"
            className="modal-image"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
      {isRetailModalOpen && (
        <div className="modal-overlay" onClick={() => setIsRetailModalOpen(false)}>
          <img
            src={retailImages[retailImageIndex]}
            alt="Retail Manager Screenshot"
            className="modal-image"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}



      
      {/* Blogs Section */}
      <section id="blogs" className="blogs-section">
        <div className="blogs-hero">
          <div className="blogs-hero-content">
            <h1>My Blogs</h1>
            <p>Blog posts are on the way! Soon I'll be writing about what I'm learning, building, and navigating in tech, with some personal stories in between.</p>
          </div>
        </div>
        {windowWidth <= 768 ? (
          <div className="cards-wrapper mobile-blog-row">
            <button
              className="arrow-btn left-arrow"
              onClick={() => setBlogIndex(Math.max(0, blogIndex - 1))}
              disabled={blogIndex === 0}
            ><span className="arrow-icon">‹</span></button>
            <div className="blog-cards-container">
              {blogs.slice(blogIndex, blogIndex + 1).map((blog, index) => (
                <div key={blog.num} className="card-grid-space">
                  <div className="num">{blog.num}</div>
                  <a className="card" href="#" style={{ "--bg-img": `url('${blog.bgImg}')` }}>
                    <div>
                      <h1>{blog.title}</h1>
                      <p>{blog.description}</p>
                      <div className="date">{blog.date}</div>
                      <div className="tags">
                        {blog.tags.map((tag, tagIndex) => (
                          <div key={tagIndex} className="tag">{tag}</div>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <button
              className="arrow-btn right-arrow"
              onClick={() => setBlogIndex(Math.min(maxIndex, blogIndex + 1))}
              disabled={blogIndex === maxIndex}
            ><span className="arrow-icon">›</span></button>
          </div>
        ) : (
          <div className="cards-wrapper">
            <button className="arrow-btn left-arrow" onClick={() => setBlogIndex(Math.max(0, blogIndex - 1))}>‹</button>
            <div className="blog-cards-container">
              {blogs.slice(blogIndex, blogIndex + 4).map((blog, index) => (
                <div key={blog.num} className="card-grid-space">
                  <div className="num">{blog.num}</div>
                  <a className="card" href="#" style={{ "--bg-img": `url('${blog.bgImg}')` }}>
                    <div>
                      <h1>{blog.title}</h1>
                      <p>{blog.description}</p>
                      <div className="date">{blog.date}</div>
                      <div className="tags">
                        {blog.tags.map((tag, tagIndex) => (
                          <div key={tagIndex} className="tag">{tag}</div>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <button className="arrow-btn right-arrow" onClick={() => setBlogIndex(Math.min(maxIndex, blogIndex + 1))}>›</button>
          </div>
        )}
      </section>

      <section className="footer-section" id="contact">
  <motion.footer
    className="footer-container"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    viewport={{ once: false }}
  >
    <div className="contact-grid">
      {/* Social Icons - Left */}
      <div className="contact-section footer-socials">
        <a href="https://github.com/sabetha12132003" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>

      {/* Contact Info - Middle */}
      <div className="contact-section">
        <h2 className="footer-title">Contact</h2>
        <p className="footer-line">sabetha2003@gmail.com</p>
        <p className="footer-line">416-824-7215</p>
      </div>

      {/* Address - Right */}
      <div className="contact-section">
        <h3 className="footer-title">Address</h3>
        <p className="footer-line">350 Victoria St</p>
        <p className="footer-line">Toronto, ON M5B 2K3</p>
      </div>
    </div>
  </motion.footer>
</section>




    </>
  )
}

export default App
