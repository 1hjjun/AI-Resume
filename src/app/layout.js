import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false; 

export const metadata = {
  title: "Hyungjun Resume",
  description: "Welcome to my AI Resume Page",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <header className="side-header">
          <h1>Hyungjun Han</h1>
          <img src="/profile.jpg" alt="profile"/>
          <p>Hi, my name is hyungjun Han.<br></br>Im a security expert.<br></br> Welcome to my AI resume page.</p>
          <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{margin: '0 0'}}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://velog.io" target="_blank" rel="noopener noreferrer">
                <img src="/velog-icon.svg" alt="Velog" style={{ width: '7px', height: '7px' }} />
              </a>
          </div>
          <nav>
              <ul>
                  <li><a href="/AboutMe">About Me</a></li>
                  <li><a href="/Portfolio">Portfolio</a></li>
                  <li><a href="/AI Resume">AI Resume</a></li>
                  <li><a href="/Blog">Blog</a></li>
                  <li><a href="/Contact">Contact</a></li>
              </ul>
              <button className="hire-me">Hire Me</button>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
