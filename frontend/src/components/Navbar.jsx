import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Matches", path: "/matches" },
  { name: "Players", path: "/players" },
  { name: "Legends", path: "/legends" },
  { name: "Photos", path: "/photos" },
  { name: "Fan Zone", path: "/fanzone" },
  { name: "Quiz", path: "/quiz" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 gradient-navbar backdrop-blur-lg shadow-lg">
      <ul className="flex justify-center gap-10 py-5">
        {links.map((link) => (
          <motion.li
            key={link.name}
            whileHover={{ scale: 1.15, rotate: -2 }}
            className="relative"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `font-bold text-lg transition-all ${
                  isActive
                    ? "text-barcaYellow"
                    : "text-white hover:text-barcaPink"
                }`
              }
            >
              {link.name}
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-barcaPink scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
