import React from "react";

const SUPPORT_EMAIL = "flhelpdesk26@gmail.com";

const HelpDesk = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#020617] to-[#111827] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl rounded-3xl bg-slate-950/90 border border-sky-500/40 shadow-[0_24px_80px_rgba(15,23,42,0.9)] p-6 md:p-8">
        {/* header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
            Help Desk
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Need help with a course, compiler, or account? Click the email below
            to send us a message from your mail app, then we’ll reply to you.
          </p>
        </div>

        {/* clickable email card */}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="
            mb-6 flex items-center justify-between gap-3
            rounded-2xl border border-cyan-400/50
            bg-linear-to-r from-sky-500/20 via-transparent to-pink-500/20
            px-4 py-3
            hover:border-cyan-300 hover:from-sky-500/30 hover:to-pink-500/30
            transition
          "
        >
          <div>
            <p className="text-[11px] uppercase tracking-wide text-slate-300">
              Click to send an email
            </p>
            <p className="text-sm md:text-base font-semibold text-cyan-200">
              {SUPPORT_EMAIL}
            </p>
            <p className="mt-1 text-[11px] text-slate-400">
              Opens your default email app with the address filled in.
            </p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 text-lg">
            ✉️
          </div>
        </a>

        {/* optional helper fields (purely UI, no sending) */}
        <div className="space-y-3">
          <p className="text-xs text-slate-400">
            Tip: You can copy this quick template into your email:
          </p>
          <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-4 text-xs text-slate-200">
            <p className="font-semibold text-slate-100 mb-1">Subject idea:</p>
            <p className="mb-3 text-slate-300">
              [Course / Tool] – Issue description
            </p>
            <p className="font-semibold text-slate-100 mb-1">Body idea:</p>
            <p>Hi FlixerLearn team,</p>
            <p className="mt-1">
              I am facing an issue with: &lt;brief description&gt;.
            </p>
            <p className="mt-1">
              Steps to reproduce / screenshots: &lt;details&gt;.
            </p>
            <p className="mt-1">Registered email: &lt;your email&gt;.</p>
            <p className="mt-2">Thanks!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
