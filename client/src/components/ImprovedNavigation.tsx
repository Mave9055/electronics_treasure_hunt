import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Home, BookOpen, Zap, Users, Trophy, User, Settings, HelpCircle } from "lucide-react";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const mainNavItems: NavItem[] = [
  { label: "Home", path: "/", icon: <Home className="w-5 h-5" />, color: "text-blue-600", description: "Dashboard" },
  { label: "Learn", path: "/getting-started", icon: <BookOpen className="w-5 h-5" />, color: "text-green-600", description: "Start learning" },
  { label: "Fundamentals", path: "/fundamentals", icon: <Zap className="w-5 h-5" />, color: "text-yellow-600", description: "Core concepts" },
  { label: "Interactive", path: "/interactive-masterclass", icon: <Trophy className="w-5 h-5" />, color: "text-purple-600", description: "Tools & simulators" },
  { label: "Community", path: "/community", icon: <Users className="w-5 h-5" />, color: "text-pink-600", description: "Success stories" },
  { label: "Gamification", path: "/gamification", icon: <Trophy className="w-5 h-5" />, color: "text-indigo-600", description: "Quizzes & badges" },
  { label: "My Profile", path: "/profile", icon: <User className="w-5 h-5" />, color: "text-rose-600", description: "Certificates & stats" },
];

const toolsNavItems: NavItem[] = [
  { label: "Troubleshooting", path: "/troubleshooting", icon: <HelpCircle className="w-5 h-5" />, color: "text-red-600", description: "Fix problems" },
  { label: "Compatibility", path: "/compatibility-checker", icon: <Zap className="w-5 h-5" />, color: "text-green-600", description: "Check parts" },
  { label: "Calculators", path: "/tools-calculators", icon: <Settings className="w-5 h-5" />, color: "text-yellow-600", description: "Component tools" },
  { label: "Error Codes", path: "/error-codes", icon: <HelpCircle className="w-5 h-5" />, color: "text-orange-600", description: "Arduino errors" },
  { label: "Safety & Projects", path: "/safety-projects", icon: <BookOpen className="w-5 h-5" />, color: "text-red-600", description: "Safety guide" },
];

export default function ImprovedNavigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <button className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-80 transition-all border-0 cursor-pointer bg-transparent">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                ⚡
              </div>
              <span>Electronics Treasure Hunt</span>
            </button>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {mainNavItems.slice(0, 5).map(item => (
              <Link key={item.path} href={item.path}>
                <button className="flex items-center gap-2 px-3 py-2 text-white hover:bg-white/20 rounded-lg transition-all border-0 cursor-pointer bg-transparent text-sm font-medium">
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </Link>
            ))}
          </div>

          {/* Right Side - Profile & Menu */}
          <div className="flex items-center gap-3">
            <Link href="/profile">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all border-0 cursor-pointer font-semibold">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-all border-0 cursor-pointer bg-transparent"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Learning Section */}
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Learning</h3>
                <div className="space-y-2">
                  {mainNavItems.slice(0, 5).map(item => (
                    <Link key={item.path} href={item.path}>
                      <button
                        onClick={() => setSidebarOpen(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all border-0 cursor-pointer bg-transparent text-left"
                      >
                        <div className={item.color}>{item.icon}</div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.label}</p>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      </button>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tools Section */}
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Tools</h3>
                <div className="space-y-2">
                  {toolsNavItems.map(item => (
                    <Link key={item.path} href={item.path}>
                      <button
                        onClick={() => setSidebarOpen(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all border-0 cursor-pointer bg-transparent text-left"
                      >
                        <div className={item.color}>{item.icon}</div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.label}</p>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      </button>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Profile Section */}
              <div className="border-t pt-6">
                <Link href="/profile">
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all border-0 cursor-pointer"
                  >
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">My Profile</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Access Bar (Desktop Only) */}
      <div className="hidden md:block bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="container py-3 flex items-center gap-4 overflow-x-auto">
          <span className="text-xs font-bold text-gray-600 whitespace-nowrap">Quick Access:</span>
          {toolsNavItems.map(item => (
            <Link key={item.path} href={item.path}>
              <button className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all border-0 cursor-pointer text-sm font-medium text-gray-700 whitespace-nowrap">
                <span className={item.color}>{item.icon}</span>
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
