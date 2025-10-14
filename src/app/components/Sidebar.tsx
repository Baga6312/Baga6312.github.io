import { Calendar, Home, Info, Link, Mail, MessageSquare, Menu } from "lucide-react";

export default function Sidebar() {
  return (
    <>
      {/* Sidebar for larger screens */}
      <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 hidden h-auto w-16 flex-col items-center justify-center space-y-8 bg-gray-800 py-8 md:flex rounded-r-2xl shadow-lg">
        <Home className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
        <Info className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
        <MessageSquare className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
        <Calendar className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
        <Link className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
        <Mail className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
      </nav>

      {/* Navbar for mobile screens */}
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-gray-800 p-4 md:hidden">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
        </div>
        <div className="flex items-center space-x-4">
          <Home className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
          <Info className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
          <MessageSquare className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
          <Calendar className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
          <Link className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
          <Mail className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
        </div>
      </nav>
    </>
  );
}
