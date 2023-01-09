import image from "../images/person-image.jpg";

export default function Header() {
  return (
    <div className="header--container">
      <img className="person-image" src={image} alt="person" />
      <div className="header--text-container">
        <h1 className="header--person-name">Laura Smith</h1>
        <h5 className="header--person-job">Frontend Developer</h5>
        <h6>Laurasmith.website</h6>
      </div>
      <div className="header--button-div">
        <button className="header--button-email">
          <i className="fa-solid fa-envelope"></i>
          <span className="spam">Email</span>
        </button>
        <button className="header--button-linkedin">
          <i className="fa-brands fa-linkedin"></i>
          <span> LinkedIn</span>
        </button>
      </div>
      <div className="header--about-container">
        <h2 className="header--about-title">About</h2>
        <p className="header--about-paragraph">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="header--interests-container">
        <h2>Interests</h2>
        <p className="header--interests-paragraph">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
