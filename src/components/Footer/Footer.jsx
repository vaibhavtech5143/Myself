import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

import footer from "../../assets/footer.jpg";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={footer} alt="Founder" width="30%" height="30%" />

        <h2>Vaibhav Singh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://instagram.com/_webbhav__?igshid=ZGUzMzM3NWJiOQ=="
            target={"blank"}
          >
            <AiFillInstagram />
          </a>
          <a href="https://github.com/vaibhavtech5143" target={"blank"}>
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-singh-0785291b5/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
