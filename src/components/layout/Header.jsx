import { Search, Bell, ChevronDown, Menu, Triangle } from "lucide-react";



const Header = ({ onMenuClick }) => {
  return (
    <header className="h-14 bg-[#1E1B4B] flex items-center justify-between px-2 sm:px-4 sticky top-2 z-30 m-2 sm:mx-2 rounded-xl shadow-md">
      {/* Left: hamburger (mobile/tablet) + workspace */}

      <div className="flex items-center gap-3">
        {/* Hamburger — visible below lg */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1 rounded hover:bg-white/10 text-white"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-8 h-8 object-contain" />
          {/* Workspace name hidden on xs, shown sm+ */}
          <span className="hidden sm:inline font-semibold text-white tracking-wide text-lg">Worcspace</span>
        </div>

        {/* Workspace badge — hidden on xs */}
        <div className="hidden sm:flex items-center gap-1.5 bg-white/10 text-white/90 rounded-full px-3 py-1.5 text-xs font-medium cursor-pointer hover:bg-white/20 transition-colors ml-4">
          Worcspace 1
          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-8 justify-center">
        <div className="relative w-full flex items-center bg-white/10 hover:bg-white/15 transition-colors border border-white/10 rounded-md px-3 py-1.5">
          <Search className="w-4 h-4 text-white/60 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent border-none text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-0"
          />
          <span className="text-white/60 text-xs font-medium ml-2 tracking-widest">⌘K</span>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4">
        {/* Search icon on mobile */}
        <button className="md:hidden p-2 rounded hover:bg-white/10 text-white/80" aria-label="Search">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-white/80 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-[#A59CE9] flex items-center justify-center shadow-sm cursor-pointer">
          <span className="text-[#1A0B2E] text-xs font-bold tracking-tight">GK</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
