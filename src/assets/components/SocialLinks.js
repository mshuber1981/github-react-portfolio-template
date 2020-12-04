// https://react-icons.netlify.com/#/
import { FaGithub, FaLink, FaTwitter } from "react-icons/fa";

const SocialLinks = ({ githubUrl, link, twitter }) => {
  const twitterLink = `https://twitter.com/${twitter}`;

  if (link === "" && twitter === null) {
    return (
      <>
        <div className="social-links">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </>
    );
  }

  if (link !== "" && twitter === null) {
    return (
      <>
        <div className="social-links">
          <a className="mr-5" href={githubUrl} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href={link} target="_blank" rel="noreferrer">
            <FaLink />
          </a>
        </div>
      </>
    );
  }

  if (link === "" && twitter !== null) {
    return (
      <>
        <div className="social-links">
          <a className="mr-5" href={githubUrl} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href={twitterLink} target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="social-links">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a className="mx-5" href={link} target="_blank" rel="noreferrer">
          <FaLink />
        </a>

        <a href={twitterLink} target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
