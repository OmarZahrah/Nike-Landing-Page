import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
import { useState } from "react";
const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="z-10 flex items-center justify-between w-full py-8 padding-x max-container">
      <a href="/">
        <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
      </a>
      <nav
        className={`transition ease-in-out delay-150 duration-[0.3s] ${
          openNav ? "open-nav" : " nav"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-lg leading-normal font-montserrat text-slate-gray hover:text-coral-red max-lg:text-2xl"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div
        className="z-20 cursor-pointer"
        onClick={() => setOpenNav((s) => !s)}
      >
        <img
          src={hamburger}
          width={25}
          height={25}
          alt="menu icon"
          className="hidden max-lg:block"
        />
      </div>
    </header>
  );
};
export default Nav;
