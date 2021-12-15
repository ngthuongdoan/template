import ActiveLink from "components/ActiveLink/ActiveLink";
import { Icons } from "components/Icons";
import Link from "next/link";

const Header: React.VFC = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo">
          <Link href="/">
            <Icons.Duduk size={106} />
          </Link>
        </div>
        <nav className="menu">
          <ul className="menu-wrapper">
            <li className="menu-items">
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li className="menu-items">
              <ActiveLink href="/about">About Us</ActiveLink>
            </li>
            <li className="menu-items">
              <ActiveLink href="/teams">Our Team</ActiveLink>
            </li>
            <li className="menu-items">
              <ActiveLink href="/blog">Blog</ActiveLink>
            </li>
            <li className="menu-items">
              <ActiveLink href="/portfolio">Portfolio</ActiveLink>
            </li>
            <li className="menu-items menu-items--button">
              <ActiveLink href="/contact">Contact Us</ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
