import { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              GlobalCSE
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="./pages/Programs" className="text-white hover:text-blue-400 transition-colors">CSE Programs</Link>
            <Link to="/process" className="text-white hover:text-blue-400 transition-colors">Application Process</Link>
            <Link to="/stories" className="text-white hover:text-blue-400 transition-colors">Student Stories</Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link>
          </nav>

          {/* Utility Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`absolute top-16 left-0 w-full bg-black p-4 transform transition-all duration-300 ${isSearchOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="container mx-auto">
            <input
              type="text"
              placeholder="Search CSE programs worldwide..."
              className="w-full px-4 py-2 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 left-0 w-full bg-black transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/programs" className="text-white hover:text-blue-400 transition-colors">CSE Programs</Link>
            <Link to="/process" className="text-white hover:text-blue-400 transition-colors">Application Process</Link>
            <Link to="/stories" className="text-white hover:text-blue-400 transition-colors">Student Stories</Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}