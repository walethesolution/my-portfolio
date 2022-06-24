import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/olawale-ayejuyone"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/walethesolution"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/olawaleAndrew2"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <span>
            <FontAwesomeIcon icon={faCopyright} />
          </span>
          <p>Copyright. 2022 All rights reserved. </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
