// app/page.js
'use client';

import ThemeToggle from './components/theme-toggle';
import { 
  FiUser, FiSettings, FiBell, FiSearch, FiStar, FiTrendingUp, 
  FiDownload, FiUpload, FiCreditCard, FiShoppingCart,
  FiCalendar, FiMessageSquare, FiUsers, FiPackage,
  FiActivity, FiDollarSign, FiGlobe, FiLock, FiFileText, FiDatabase
} from 'react-icons/fi';
import { 
  BsGraphUpArrow, BsCheckCircleFill, BsFire, BsShieldCheck,
  BsLightningCharge, BsCollection, BsEye
} from 'react-icons/bs';
import { MdOutlineDashboard, MdOutlineAnalytics } from 'react-icons/md';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Gesamtumsatz', value: '€42,580', change: '+12.5%', icon: <FiDollarSign />, color: 'from-emerald-500 to-teal-400' },
    { label: 'Nutzer Aktiv', value: '3,842', change: '+8.2%', icon: <FiUsers />, color: 'from-blue-500 to-cyan-400' },
    { label: 'Neue Bestellungen', value: '287', change: '+23.1%', icon: <FiShoppingCart />, color: 'from-violet-500 to-purple-400' },
    { label: 'Wachstumsrate', value: '34.7%', change: '+5.4%', icon: <FiTrendingUp />, color: 'from-amber-500 to-orange-400' },
  ];

  const recentActivities = [
    { user: 'Alex Müller', action: 'Neues Projekt erstellt', time: 'vor 2 Min', icon: <FiUser className="text-sky-500" /> },
    { user: 'Sarah Chen', action: 'Zahlung erhalten €2,500', time: 'vor 15 Min', icon: <BsCheckCircleFill className="text-emerald-500" /> },
    { user: 'Team Design', action: 'Prototyp v1.2 fertig', time: 'vor 1 Std', icon: <FiPackage className="text-violet-500" /> },
    { user: 'Max Weber', action: 'Dokumentation aktualisiert', time: 'vor 3 Std', icon: <FiFileText className="text-amber-500" /> },
  ];

  const projects = [
    { name: 'Website Redesign', progress: 85, color: 'from-sky-500 to-blue-400', days: 7 },
    { name: 'Mobile App Launch', progress: 60, color: 'from-violet-500 to-purple-400', days: 14 },
    { name: 'API Integration', progress: 45, color: 'from-emerald-500 to-teal-400', days: 21 },
    { name: 'Cloud Migration', progress: 30, color: 'from-amber-500 to-orange-400', days: 28 },
  ];

  const quickActions = [
    { label: 'Neues Projekt', icon: <BsLightningCharge />, color: 'bg-linear-to-br from-sky-500 to-blue-500' },
    { label: 'Analytics', icon: <MdOutlineAnalytics />, color: 'bg-linear-to-br from-emerald-500 to-teal-500' },
    { label: 'Reporting', icon: <BsCollection />, color: 'bg-linear-to-br from-violet-500 to-purple-500' },
    { label: 'Datenbank', icon: <FiDatabase />, color: 'bg-linear-to-br from-amber-500 to-orange-500' },
    { label: 'Security', icon: <BsShieldCheck />, color: 'bg-linear-to-br from-rose-500 to-pink-500' },
    { label: 'Monitoring', icon: <BsEye />, color: 'bg-linear-to-br from-indigo-500 to-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-gray-50/95 to-gray-100 dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-950 text-gray-800 dark:text-gray-200 transition-all duration-300">
      
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-b border-gray-300/50 dark:border-gray-700/50 shadow-sm dark:shadow-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 hover:cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-sky-600 to-blue-500 flex items-center justify-center shadow-md">
                <BsFire className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-linear-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent">
                NEXUS
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Suche nach Projekten, Teams oder Dokumenten..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 border border-gray-300/50 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-sky-500/30 dark:focus:ring-sky-400/30 focus:border-sky-400 dark:focus:border-sky-500 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 transition-all hover:cursor-text"
                />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-3">
              <button className="relative p-2.5 rounded-xl hover:bg-gray-200/80 dark:hover:bg-gray-800/80 transition-colors duration-200 hover:cursor-pointer group">
                <FiBell className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-sky-600 dark:group-hover:text-sky-400" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center shadow-sm">
                  3
                </span>
              </button>
              <button className="p-2.5 rounded-xl hover:bg-gray-200/80 dark:hover:bg-gray-800/80 transition-colors duration-200 hover:cursor-pointer group">
                <FiSettings className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-sky-600 dark:group-hover:text-sky-400" />
              </button>
              <div className="w-8 h-8 rounded-full bg-linear-to-r from-violet-500 to-purple-500 shadow-sm hover:scale-105 transition-transform hover:cursor-pointer"></div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                Willkommen zurück, <span className="bg-linear-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent">Max Mustermann</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Hier ist dein tägliches Dashboard mit allen wichtigen Metriken — <span className="text-sky-600 dark:text-sky-400 font-medium">heute ist ein produktiver Tag!</span>
              </p>
            </div>
            <button className="px-6 py-3 bg-linear-to-r from-sky-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/30 dark:hover:shadow-sky-500/20 transition-all duration-300 hover:scale-105 hover:cursor-pointer flex items-center space-x-2 group">
              <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
              <span>Report Exportieren</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 shadow-sm hover:shadow-md dark:hover:shadow-gray-700/30 transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-5">
                <div className={`p-3 rounded-xl bg-linear-to-br ${stat.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-2xl text-white">{stat.icon}</div>
                </div>
                <span className={`text-sm font-semibold px-2.5 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Progress Projects */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Laufende Projekte</h2>
                <button className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors hover:cursor-pointer flex items-center space-x-1.5 font-medium group">
                  <span>Alle anzeigen</span>
                  <BsGraphUpArrow className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="space-y-7">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors duration-200 hover:cursor-pointer group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {project.name}
                      </span>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.days} Tage</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{project.progress}%</span>
                      </div>
                    </div>
                    <div className="h-2.5 bg-gray-300/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-linear-to-r ${project.color} rounded-full transition-all duration-700 group-hover:shadow-md`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 shadow-sm">
              <h2 className="text-xl font-bold mb-8 text-gray-900 dark:text-white">Aktuelle Aktivitäten</h2>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors duration-200 group hover:cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-full bg-white dark:bg-gray-700 border border-gray-300/50 dark:border-gray-600/50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {activity.user}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{activity.action}</div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Quick Actions Grid */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 shadow-sm">
              <h2 className="text-xl font-bold mb-8 text-gray-900 dark:text-white">Schnellzugriff</h2>
              
              <div className="grid grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                  <button 
                    key={index}
                    className={`${action.color} aspect-square rounded-xl flex flex-col items-center justify-center text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer group`}
                  >
                    <div className="text-2xl mb-2 group-hover:animate-pulse">{action.icon}</div>
                    <span className="text-xs font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 shadow-sm">
              <h2 className="text-xl font-bold mb-8 text-gray-900 dark:text-white">System Performance</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-3 h-3 rounded-full bg-linear-to-r from-sky-500 to-blue-400"></div>
                      <span className="font-medium">CPU Auslastung</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">68%</span>
                  </div>
                  
                  <div className="h-2.5 bg-gray-300/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-linear-to-r from-sky-500 to-blue-400 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-3 h-3 rounded-full bg-linear-to-r from-emerald-500 to-teal-400"></div>
                      <span className="font-medium">Speicher</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">42%</span>
                  </div>
                  
                  <div className="h-2.5 bg-gray-300/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-linear-to-r from-emerald-500 to-teal-400 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-3 h-3 rounded-full bg-linear-to-r from-violet-500 to-purple-400"></div>
                      <span className="font-medium">Netzwerk I/O</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">24%</span>
                  </div>
                  
                  <div className="h-2.5 bg-gray-300/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-linear-to-r from-violet-500 to-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Mode Showcase */}
            <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-lg hover:shadow-gray-900/50 transition-shadow duration-300 hover:cursor-pointer group">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-white">
                  {typeof window !== 'undefined' && document.documentElement.classList.contains('dark') 
                    ? '🌙 Dark Mode Active' 
                    : '☀️ Light Mode Active'
                  }
                </h2>
                <div className="text-sky-400 group-hover:animate-spin transition-transform duration-700">
                  <FiStar className="w-6 h-6" />
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
                  ? 'Perfekt für die Abendstunden. Deine Augen werden es dir danken!'
                  : 'Ideal für helle Umgebungen. Maximale Lesbarkeit bei Tageslicht.'
                }
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <FiLock className="w-4 h-4 shrink-0" />
                <span>Batterie wird geschont • Weniger Augenbelastung • Bessere Konzentration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-linear-to-r from-sky-600 to-blue-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:cursor-pointer group">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">✨ Pro Feature freischalten</h3>
                <p className="opacity-95">Erhalte erweiterte Analytics, unbegrenzte Projekte & Priority Support</p>
              </div>
              <button className="px-6 py-3 bg-white text-sky-600 rounded-xl font-bold hover:scale-105 transition-transform hover:cursor-pointer shadow-md hover:shadow-lg group-hover:animate-pulse">
                Jetzt upgraden
              </button>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 hover:cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <BsFire className="w-8 h-8 text-white" />
              </div>
              <p className="font-bold text-gray-900 dark:text-white">🔥 14 Tage Aktivitäts-Serie</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Bleib dran für exklusive Belohnungen!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-300/50 dark:border-gray-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-sky-600 to-blue-500 flex items-center justify-center">
                  <BsFire className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-gray-900 dark:text-white">NEXUS Dashboard v2.1</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © 2025 Nexus Dashboard. Built with Next.js 16+ & Tailwind CSS 4+.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {['Datenschutz', 'Nutzungsbedingungen', 'Support', 'Dokumentation', 'Changelog'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200 hover:cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}