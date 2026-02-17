import { useEffect, useState } from 'react'
import './App.css'

type ClientLogo = {
  src: string
  alt: string
}

const CLIENT_LOGOS: ClientLogo[] = [
  { src: '/images/client/1.png', alt: 'Client 01' },
  { src: '/images/client/2.png', alt: 'Client 02' },
  { src: '/images/client/3.png', alt: 'Client 03' },
  { src: '/images/client/4.png', alt: 'Client 04' },
]

function App() {
  const [clientOffset, setClientOffset] = useState(0)

  useEffect(() => {
    if (CLIENT_LOGOS.length <= 3) {
      return
    }

    const id = window.setInterval(() => {
      setClientOffset((previous) => (previous + 1) % CLIENT_LOGOS.length)
    }, 3500)

    return () => {
      window.clearInterval(id)
    }
  }, [])

  const visibleClients =
    CLIENT_LOGOS.length <= 3
      ? CLIENT_LOGOS
      : [0, 1, 2].map((index) => CLIENT_LOGOS[(clientOffset + index) % CLIENT_LOGOS.length])

  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img
              src="/images/Logo.png"
              alt="GIMFLY STUDIO logo"
              className="brand-logo"
            />
            <div className="brand-text">
              <span className="brand-name">GIMFLY STUDIO</span>
              <span className="brand-tagline">Premium game developer studio</span>
            </div>
          </div>
          <nav className="nav">
            <a href="#who-we-are">Studio</a>
            <a href="#game">Game</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-kicker">Single-player experiences</p>
              <h1>GIMFLY STUDIO</h1>
              <p className="hero-lead">
                GIMFLY STUDIO is a newly formed indie game studio established in
                2026 out of a course, with the ambition to energize the
                Indonesian game market through strong, meaningful single-player
                experiences.
              </p>
              <div className="hero-actions">
                <button className="primary-action">Discover our vision</button>
                <button className="ghost-action">Our first project</button>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-art-placeholder">
                <img
                  src="/images/Hero.png"
                  alt="The Tainted Shadow key art"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="who-we-are">
          <div className="container section-split">
            <div className="section-block">
              <h2>Who we are</h2>
              <p>
                We are a group of young developers who met through a course and
                decided to found GIMFLY STUDIO in 2026. We believe the Indonesian
                game market has a huge potential that has yet to be fully tapped.
              </p>
              <p>
                Our focus is to build games with high production quality, strong
                attention to detail, and deep respect for history. We want to
                deliver experiences that are exciting to play while staying
                historically grounded, so players can enjoy the story and learn
                something meaningful at the same time.
              </p>
            </div>
            <div className="section-block">
              <div className="section-card">
                <h3>Our philosophy</h3>
                <p>
                  Every project we work on starts from research, empathy for
                  players, and responsibility toward the historical material we
                  bring into our games. We balance creative freedom with factual
                  accuracy so the worlds and characters we build feel authentic
                  yet remain enjoyable to explore.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="game">
          <div className="container section-split">
            <div className="section-block">
              <p className="section-kicker">Flagship project</p>
              <h2>The Tainted Shadow</h2>
              <p>
                The Tainted Shadow is our debut flagship title: a narrative
                single-player game inspired by Indonesian history, built with an
                ambition for AAA-quality execution from an independent studio.
              </p>
              <ul className="feature-list">
                <li>
                  Grounded in historical research so settings, characters, and
                  events feel convincing and respectful.
                </li>
                <li>
                  Focused on a strong, emotional single-player experience that
                  remains accessible to a wide range of players.
                </li>
                <li>
                  Created by a small independent team aiming to bring stories
                  from Indonesia onto the global stage.
                </li>
              </ul>
            </div>
            <div className="section-block">
              <div className="media-placeholder media-embed">
                <div className="media-embed-inner">
                  <iframe
                    src="https://www.youtube.com/embed/Hs8cjZYtQYc"
                    title="The Tainted Shadow – Combat Prototype by GIMFLY"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="project-eunoia">
          <div className="container">
            <div className="coming-soon-card">
              <p className="coming-soon-title">Coming soon</p>
              <h2>Project Eunoia</h2>
              <p className="coming-soon-subtitle">
                An unannounced action RPG rooted in the era of Majapahit.
              </p>
              <p className="coming-soon-text">
                Details remain under wraps for now, but expect a combat-focused
                experience shaped by careful historical research and a deep
                respect for Nusantara&apos;s legacy.
              </p>
              <span className="coming-soon-pill">Stay tuned</span>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="clients">
          <div className="container">
            <p className="section-kicker">Our clients</p>
            <h2>Studios and partners</h2>
            <p className="section-intro">
              A selection of teams and partners that trust GIMFLY STUDIO for
              game development, prototyping, and creative collaboration.
            </p>
            <div className="client-grid">
              {visibleClients.map((client, index) => (
                <div className="client-logo" key={`${client.alt}-${index}`}>
                  <img src={client.src} alt={client.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section newsletter">
          <div className="container newsletter-inner">
            <div>
              <p className="section-kicker">Stay in touch</p>
              <h2>Newsletter</h2>
              <p>
                Follow our journey as a new game studio from Central Jakarta.
                Get updates on development, demo releases, and behind-the-scenes
                stories.
              </p>
            </div>
            <form
              className="newsletter-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="newsletter-input"
              />
              <button type="submit" className="primary-action">
                Join the newsletter
              </button>
            </form>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container">
            <p className="section-kicker">The team</p>
            <h2>Meet the studio</h2>
            <p className="section-intro">
              GIMFLY STUDIO is built by a small team coming from the same
              course background. We combine creative vision, technical skills,
              and a love for history to craft distinctive gameplay experiences.
            </p>
            <div className="team-grid">
              <article className="team-card">
                <div className="team-avatar">
                  <img
                    src="/images/team/Hans.png"
                    alt="Hansdynand Poudyra Agatha"
                  />
                </div>
                <h3>Hansdynand Poudyra Agatha</h3>
                <p className="team-role">Founder &amp; Game Producer</p>
                <p>
                  Leads the studio&apos;s direction and ensures each project
                  stays aligned with GIMFLY STUDIO&apos;s vision, from early
                  concept to release.
                </p>
              </article>
              <article className="team-card">
                <div className="team-avatar">
                  <img
                    src="/images/team/Andhika.png"
                    alt="Hansdynand Poudyra Agatha"
                  />
                </div>
                <h3>Andhika Septian Prayoga</h3>
                <p className="team-role">CEO &amp; Game Engineer</p>
                <p>
                  Responsible for the technical foundation of our games and key
                  strategic decisions, from architecture to build quality.
                </p>
              </article>
              <article className="team-card">
                <div className="team-avatar">
                  <img
                    src="/images/team/Radit.png"
                    alt="Hansdynand Poudyra Agatha"
                  />
                </div>
                <h3>Raditya Ananta Wisuda Putra</h3>
                <p className="team-role">CO-CEO &amp; Game Director</p>
                <p>
                  Guides the creative direction of each game, from narrative
                  tone and gameplay pacing to the overall player experience.
                </p>
              </article>
              <article className="team-card">
                <div className="team-avatar">
                  <img
                    src="/images/team/Amanda.png"
                    alt="Hansdynand Poudyra Agatha"
                  />
                </div>
                <h3>Amanda Jayanti Mulyana</h3>
                <p className="team-role">Creative Director</p>
                <p>
                  Shapes the visual identity and worlds we build so every
                  detail feels consistent, expressive, and immersive.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="contact">
          <div className="container contact-inner">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>Get in touch</h2>
              <p>
                We welcome collaboration, feedback, and any opportunities that
                can help us grow as a studio. Feel free to reach out if you are
                interested in working together or simply want to say hello.
              </p>
            </div>
            <div className="contact-details">
              <div className="contact-block">
                <h3>Email</h3>
                <p>gimflyofficial@gmail.com</p>
              </div>
              <div className="contact-block">
                <h3>Address</h3>
                <p>
                  GIMFLY STUDIO
                  <br />
                  Jakarta Pusat
                  <br />
                  Indonesia
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} GIMFLY STUDIO</span>
          <span>Historical-focused indie game studio from Central Jakarta</span>
        </div>
      </footer>
    </div>
  )
}

export default App
