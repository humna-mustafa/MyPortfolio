import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
