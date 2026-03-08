import { User, FolderOpen, Wrench } from "lucide-react";
import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  { name: "About", link: "#about", icon: <User className="h-4 w-4" /> },
  { name: "Projects", link: "#projects", icon: <FolderOpen className="h-4 w-4" /> },
  { name: "Skills", link: "#skills", icon: <Wrench className="h-4 w-4" /> },
];

const Navbar = () => {
  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
