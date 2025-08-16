import { NavLink } from "react-router-dom";

export default function Navbar() {
  const link =
    "px-3 py-2 rounded hover:bg-gray-800 transition-colors aria-[current=page]:text-blue-400";
  return (
    <header className="sticky top-0 z-10 bg-gray-900 text-white border-b border-gray-800">
      <nav className="mx-auto max-w-6xl flex items-center gap-4 p-3">
        <NavLink to="/" className="text-lg font-semibold mr-4">OnDevicePDF</NavLink>
        <NavLink to="/" className={link} end>Home</NavLink>
        <NavLink to="/tools" className={link}>Tools</NavLink>
        <NavLink to="/about" className={link}>About</NavLink>
      </nav>
    </header>
  );
}
