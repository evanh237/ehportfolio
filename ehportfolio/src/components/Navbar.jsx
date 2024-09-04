import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/evanh237"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-purple-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/evan-hiltunen7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-purple-500"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
