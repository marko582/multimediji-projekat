import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import barcaLogo from "../assets/barcelona-logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Matches", path: "/matches" },
  { name: "Players", path: "/players" },
  { name: "Legends", path: "/legends" },
  { name: "Photos", path: "/photos" },
  { name: "TimeLine", path: "/timeline" },
  { name: "Quiz", path: "/quiz" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 gradient-navbar backdrop-blur-lg shadow-lg">
      <div className="relative flex items-center py-4 px-8">
        {/* GRB */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="absolute left-6"
        >
          <Link to="/">
            <img src={barcaLogo} alt="FC Barcelona" className="h-12 w-auto" />
          </Link>
        </motion.div>

        {/* LINKOVI */}
        <ul className="flex justify-center gap-10 w-full">
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
      </div>
    </nav>
  );
}
