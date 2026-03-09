import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Journey", link: "#journey" },
  { name: "Skills", link: "#skills" },
  { name: "Blog", link: "#articles" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
