import "./footer.css";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const styles = {
    color: "antiquewhite",
    width: "30px",
    height: "25px",
  };

  return (
    <footer>
      <div className="details">
        <div>
          <h1>Get Involved </h1>
          <ul>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
          </ul>
        </div>
        <div>
          <h1> Organize Event </h1>
          <ul>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
          </ul>
        </div>
        <div>
          <h1> Blog </h1>
          <ul>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
          </ul>
        </div>
        <div>
          <h1> Support </h1>
          <ul>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
          </ul>
        </div>
        <div>
          <h1> Stats </h1>
          <ul>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
          </ul>
        </div>
        <div>
          <h1> Missing Maps </h1>
          <ul>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
            <li>MapSwipe</li>
          </ul>
        </div>
      </div>
      <div>

        <a
          href="https://www.instagram.com/gael_essence/"
          title="Youtube"
          target="_blank"
        >
          <FaYoutube style={styles}/>
        </a>
        <a
          href="https://www.instagram.com/gael_essence/"
          title="Instagram"
          target="_blank"
        >
          <FaInstagram style={styles}/>
        </a>
        <a
          href="https://www.instagram.com/gael_essence/"
          title="GitHub"
          target="_blank"
        >
          <FaGithub style={styles}/>
        </a>
        <a
          href="https://www.instagram.com/gael_essence/"
          title="LinkedIn"
          target="_blank"
        >
          <FaLinkedinIn style={styles}/>
        </a>
        <a
          href="https://www.instagram.com/gael_essence/"
          title="Facebook"
          target="_blank"
        >
          <FaFacebook style={styles}/>
        </a>
        <a
          href="https://www.instagram.com/gael_essence/"
          title="Mail"
          target="_blank"
        >
          <FaEnvelope style={styles}/>
        </a>
      </div>
      <hr />
      <small>
        {" "}
        &copy; {new Date().getFullYear()} Missing Maps. All rights reserved.
      </small>
    </footer>
  );
}
