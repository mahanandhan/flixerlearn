// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col">
      {/* Top navbar (reuse same as Welcome) */}
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
          <button className="hover:text-white transition-colors">Home</button>
          <button className="hover:text-white transition-colors">Courses</button>
          <button className="hover:text-white transition-colors">About</button>
          <button className="hover:text-white transition-colors">Login</button>
        </nav>
      </header>

      {/* About hero */}
      <main className="flex-1 flex items-center justify-center px-6 md:px-10 lg:px-20 py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + bullets */}
          <section>
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400 mb-3">
              About the platform
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                FlixerLearn
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-xl mb-8">
              FlixerLearn brings together the best, most‑searched YouTube videos
              with clear explanations, plus smart bot support so learners can
              understand every concept and stay on track.
            </p>

            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-6 w-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[11px]">
                  ■
                </span>
                <div>
                  <p className="font-medium">Handpicked YouTube content</p>
                  <p className="text-xs text-white/60">
                    Learn from the highest‑quality, most trusted videos instead
                    of wasting time searching on your own.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-6 w-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[11px]">
                  ◆
                </span>
                <div>
                  <p className="font-medium">AI bot for every concept</p>
                  <p className="text-xs text-white/60">
                    Ask doubts, get summaries, and practice questions with a bot
                    that is tuned to the videos you watch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-6 w-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[11px]">
                  ✦
                </span>
                <div>
                  <p className="font-medium">Trending tech courses</p>
                  <p className="text-xs text-white/60">
                    Follow updated paths across AI, cybersecurity, web dev and
                    other in‑demand skills, all mapped to YouTube.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Right: illustration-style card */}
          <section className="relative">
            {/* background glows */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -top-10 right-0 h-56 w-56 bg-fuchsia-500/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 h-64 w-64 bg-cyan-500/20 blur-3xl rounded-full" />
            </div>

            <div className="relative bg-gradient-to-br from-[#0b1021] via-[#050816] to-[#020617] border border-white/6 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/60 overflow-hidden">
              {/* big screen */}
              <div className="relative mx-auto max-w-sm">
                <div className="h-40 w-full rounded-2xl bg-[#050816] border border-purple-500/50 shadow-lg shadow-purple-500/40 p-3 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[10px] text-white/50">
                    <span>flixerlearn.dev / watch</span>
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <div className="flex gap-3 h-full">
                    <div className="w-1/3 space-y-1.5">
                      <div className="h-2.5 rounded bg-white/5" />
                      <div className="h-2.5 rounded bg-white/5" />
                      <div className="h-2.5 rounded bg-white/5" />
                      <div className="h-2.5 rounded bg-white/5" />
                    </div>
                    <div className="flex-1 rounded-lg bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-fuchsia-500/20 border border-cyan-400/40 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#22d3ee_0,_transparent_55%),radial-gradient(circle_at_bottom,_#f472b6_0,_transparent_55%)]" />
                      <div className="relative p-3 space-y-1.5 text-[10px] text-cyan-50/90">
                        <div className="h-1.5 w-28 rounded bg-cyan-300/70" />
                        <div className="h-1.5 w-24 rounded bg-cyan-200/60" />
                        <div className="h-1.5 w-20 rounded bg-fuchsia-300/70" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* floating hologram panel */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] rounded-2xl bg-[#020617]/90 border border-cyan-400/40 shadow-xl shadow-cyan-500/40 backdrop-blur p-3">
                  <p className="text-[10px] text-cyan-100 mb-1">
                    Concept assistant bot
                  </p>
                  <div className="flex items-center justify-between text-[9px] text-white/55">
                    <span>Ask doubts from this video</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mt-2 flex gap-2">
                    <div className="h-8 flex-1 rounded-lg bg-white/5" />
                    <div className="h-8 flex-1 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>

              {/* tiny avatars */}
              <div className="mt-16 flex justify-between px-4 text-[10px] text-white/60">
                <div className="flex flex-col items-center gap-1">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                  <span>Creator</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-400" />
                  <span>Bot</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-400 to-pink-500" />
                  <span>Learner</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
