import { FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const socials = [
  { socialIcon: <FaDiscord />, socialURL: "", alt: "Discord" },
  { socialIcon: <BiLogoGmail />, socialURL: "", alt: "Gmail" },
  { socialIcon: <IoLogoWhatsapp />, socialURL: "", alt: "Whatsapp" },
];

const Nav = () => {
  return (
    <div className="lg:flex md:flex justify-center">
      <div className="lg:w-[60vw] md:w-[70vw] flex justify-between items-center p-5 lg:p-10">
        <Link to="/">
          <div className="pl-5">Logo</div>
        </Link>
        <div>
          <ul className="flex justify-center items-center gap-5 pr-10">
            {socials.map((elem) => (
              <li key={elem.item}>
                <a href={elem.socialURL} target="_blank" rel="noreferrer">
                  {elem.socialIcon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
