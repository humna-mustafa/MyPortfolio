import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
];

const Navbar = () => {
  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
