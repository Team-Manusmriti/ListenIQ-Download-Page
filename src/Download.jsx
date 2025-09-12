import React, { useState } from "react";
import { Download, Smartphone, Cpu, Server, Sun, Moon, LucideGithub, Shield, Zap, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function DownloadPage() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-700 overflow-x-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950' 
        : 'bg-gradient-to-br from-violet-50 via-white to-pink-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className={`absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-30 blur-3xl transition-all duration-1000 ${
          darkMode ? 'bg-gradient-to-r from-violet-600 to-purple-600' : 'bg-gradient-to-r from-violet-200 to-purple-200'
        }`} style={{ transform: 'rotate(45deg)' }} /> */}
        {/* <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-30 blur-3xl transition-all duration-1000 ${
          darkMode ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-gradient-to-r from-blue-200 to-cyan-200'
        }`} style={{ transform: 'rotate(-45deg)' }} /> */}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-40 transition-colors duration-1000 ${
              darkMode ? 'bg-white' : 'bg-violet-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: 'float 6s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.8; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Header Navigation */}
      <nav className="relative z-20 flex justify-between items-center p-6">
        <div className={`text-2xl font-bold transition-colors duration-500 ${
          darkMode ? 'text-white' : 'text-slate-800'
        }`}>
          ListenIQ
        </div>
        
        <button
          onClick={toggleTheme}
          className={`group flex items-center px-6 py-1 rounded-full backdrop-blur-xl transition-all duration-300 transform hover:scale-105 ${
            darkMode 
              ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-2xl' 
              : 'bg-white/60 hover:bg-white/80 text-slate-700 border border-white/40 shadow-2xl'
          }`}
        >
          <div className="relative w-5 h-5 mr-3">
            {darkMode ? (
              <Sun className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />
            ) : (
              <Moon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
            )}
          </div>
          <span className="font-medium">
            {darkMode ? "Light" : "Dark"}
          </span>
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          {/* <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-xl transition-all duration-500 ${
            darkMode 
              ? 'bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border border-violet-400/30' 
              : 'bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border border-violet-200'
          }`}>
            {/* <Star className="w-4 h-4 mr-2" />
            #1 Downloaded App This Month */}
          {/* </div> */}

          {/* Main Hero */}
          <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Download
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              ListenIQ
            </span>
          </h1>

          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Experience the future of mobile and desktop applications. 
            <span className={`font-semibold ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}> Fast, secure, and beautifully designed</span> for the modern user.
          </p>
        </div>
      </div>

      {/* Download Cards */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            {/* Mobile App Card */}
            <div className={`group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all w-1/2 duration-700 transform hover:scale-105 hover:-translate-y-4 ${
              darkMode 
                ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl hover:shadow-violet-500/30' 
                : 'bg-gradient-to-br from-white/80 to-white/60 border border-white/60 shadow-2xl hover:shadow-violet-500/30'
            }`}>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-violet-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-700" />
              
              <div className="relative p-12">
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 transition-all duration-500 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-violet-500/30 to-purple-500/30 group-hover:from-violet-400/40 group-hover:to-purple-400/40' 
                    : 'bg-gradient-to-br from-violet-100 to-purple-100 group-hover:from-violet-200 group-hover:to-purple-200'
                }`} style={{ animation: 'pulse 3s infinite' }}>
                  <Smartphone className={`w-12 h-12 transition-all duration-500 ${
                    darkMode ? 'text-violet-300 group-hover:text-violet-200' : 'text-violet-600 group-hover:text-violet-700'
                  }`} />
                </div>
                
                <h2 className={`text-4xl font-bold mb-6 transition-colors duration-500 ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Mobile App
                </h2>
                
                <p className={`text-lg mb-8 leading-relaxed transition-colors duration-500 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Download the Android APK version of ListenIQ. Optimized for mobile devices with 
                  intuitive touch controls and offline capabilities.
                </p>

                {/* Features */}
                <div className="mb-8 space-y-3">
                  {["Offline Mode", "Optimized for Mobile", "On device Processing"].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-3 ${
                        darkMode ? 'text-green-400' : 'text-green-500'
                      }`} />
                      <span className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href="/downloads/myapp.apk"
                  download
                  className={`group/btn inline-flex items-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 w-full justify-center ${
                    darkMode 
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-2xl hover:shadow-violet-500/50' 
                      : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-violet-600/50'
                  }`}
                >
                  <Download className="w-6 h-6 mr-3 transition-transform duration-300 group-hover/btn:scale-110" />
                  Download APK
                </a>

                <p className={`text-sm mt-4 text-center transition-colors duration-500 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Version 1.1.2`` • 45.2 MB • Android 7.0+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className={`rounded-4xl backdrop-blur-xl p-12 transition-all duration-500 ${
            darkMode 
              ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20' 
              : 'bg-gradient-to-br from-white/80 to-white/60 border border-white/60'
          }`}>
            <h3 className={`text-4xl font-bold text-center mb-4 transition-colors duration-500 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Why Choose ListenIQ?
            </h3>
            
            <p className={`text-xl text-center mb-12 transition-colors duration-500 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Experience the new standard in mobile applications with cutting-edge features designed for personalization, security, and performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Security First",
                  description: "End-to-end encryption with zero-knowledge architecture",
                  color: "emerald"
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Optimized performance with sub-second load times",
                  color: "yellow"
                },
                {
                  icon: Server,
                  title: "Edge Computing",
                  description: "Process data closer to the source for lower latency",
                  color: "orange"
                },
                {
                  icon: Cpu,
                  title: "AI Powered",
                  description: "Smart recommendations and automation with AI integration",
                  color: "indigo"
                },
              ].map((feature, index) => (
                <div key={index} className={`text-center group p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'hover:bg-white/5' : 'hover:bg-white/60'
                }`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 ${
                    feature.color === 'emerald' 
                      ? (darkMode ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600')
                      : feature.color === 'yellow'
                      ? (darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600')
                      : feature.color === 'blue'
                      ? (darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600')
                      : (darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600')
                  }`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>{feature.title}</h4>
                  <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

              <div className="max-w-7xl mx-auto text-center pb-10">
                <a
                target="_blank"
                  href="https://github.com/Team-Manusmriti/ai-challenge-submission-project-manusmriti.git"
                  className={`inline-flex items-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-2xl hover:shadow-violet-500/50' 
                      : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-violet-600/50'
                  }`}
                >
                  <LucideGithub className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" />
                  Visit Our GitHub for Source Code
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>


      {/* Footer */}
      <footer className="relative z-10 px-6 pb-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`p-8 rounded-3xl backdrop-blur-xl transition-all duration-500 ${
            darkMode 
              ? 'bg-white/5 border border-white/10' 
              : 'bg-white/60 border border-white/40'
          }`}>
            <p className={`text-lg mb-4 transition-colors duration-500 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Ready to transform your SmartPhone?
            </p>
            <p className={`text-sm transition-colors duration-500 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              © 2025 ListenIQ Inc. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}