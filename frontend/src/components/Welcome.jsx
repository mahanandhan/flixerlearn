// src/pages/Welcome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col">
      {/* Top navbar */}
      <header className="w-full px-8 lg:px-14 py-4 flex items-center justify-between border-b border-white/5 bg-[#050816]/80 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center text-lg font-bold">
            F
          </div>
          <span className="text-xl font-semibold tracking-wide">
            FlixerLearn
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <button onClick={() => navigate('/dashboard')} className="hover:text-white transition-colors">Home</button>
          <button onClick={() => navigate('/dashboard')} className="hover:text-white transition-colors">Courses</button>
            <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">About</button>
        </nav>
      </header>

      {/* Main hero */}
      <main className="flex-1 flex items-center justify-center px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <section>
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400 mb-3">
              FlixerLearn learning platform
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                FlixerLearn
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-xl mb-8">
              Learn AI, cybersecurity, web development, and more with a unified
              experience that flows perfectly into your personal dashboard.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate('/dashboard')} className="px-7 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 shadow-lg shadow-fuchsia-500/40 transition-all">
                Get Started
              </button>

              <button onClick={() => navigate('/dashboard')} className="px-7 py-2.5 rounded-full text-sm font-medium border border-fuchsia-400/70 text-fuchsia-300 hover:bg-fuchsia-500/10 transition-colors">
                Explore Courses
              </button>
            </div>
          </section>

          {/* Right: illustration card */}
          <section className="relative">
            {/* soft gradient glows to match dashboard */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -top-8 right-0 h-52 w-52 bg-fuchsia-500/15 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-6 h-60 w-60 bg-cyan-500/15 blur-3xl rounded-full" />
            </div>

            <div className="relative bg-gradient-to-br from-[#0b1021] via-[#050816] to-[#020617] border border-white/6 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/60">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-white/60">
                  Personalized learning workspace
                </span>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              {/* cloud + lock illustration */}
              <div className="relative mb-7">
                <div className="mx-auto h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-gradient-to-br from-fuchsia-500/25 via-purple-500/15 to-cyan-400/20 blur-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-3xl bg-[#050816] border border-cyan-400/40 shadow-lg shadow-cyan-500/40 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_#22d3ee_0,_transparent_55%),radial-gradient(circle_at_bottom,_#f472b6_0,_transparent_55%)]" />
                    <div className="relative flex flex-col items-center gap-2">
                      <div className="h-12 w-10 rounded-full border-2 border-cyan-300/90 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-md bg-cyan-300/90 flex items-center justify-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#050816]" />
                        </div>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-200/80">
                        Secure & unified
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* mini stats to hint dashboard */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-white/4 border border-white/6 p-3">
                  <p className="text-[10px] text-white/50 mb-1">
                    Tracks & pathways
                  </p>
                  <p className="text-sm font-semibold mb-1">
                    10+ Trending courses
                  </p>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
                  </div>
                </div>

                <div className="rounded-xl bg-white/4 border border-white/6 p-3">
                  <p className="text-[10px] text-white/50 mb-1">
                    Smart recommendations
                  </p>
                  <p className="text-sm font-semibold mb-1">
                    Powered by bot services
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-emerald-300/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Adapts to your goals</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[10px] text-white/45">
                Continue to the dashboard to see your roadmap, calendar, and
                real-time learning analytics across every course.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
