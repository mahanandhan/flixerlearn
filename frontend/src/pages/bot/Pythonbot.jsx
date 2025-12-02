import React, { useState } from "react";
import datasetJson from "../dataset/python.json";

const ITEMS_PER_PAGE = 5;

const Pythonbot = () => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", text: "Ask a question about Python. Type 'help' to see topics." }
  ]);
  const [helpMode, setHelpMode] = useState(false);
  const [helpPage, setHelpPage] = useState(0);

  const addMessage = (sender, text) => {
    setChatHistory((prev) => [...prev, { sender, text }]);
  };

  const renderHelpPage = () => {
    const start = helpPage * ITEMS_PER_PAGE;
    const pageItems = datasetJson.data.slice(start, start + ITEMS_PER_PAGE);

    return (
      <div className="mt-3 space-y-2">
        {pageItems.map((topic, idx) => (
          <button
            key={topic.topic}
            onClick={() => {
              const codePart = topic.exampleCode
                ? `\n\nExample code:\n${topic.exampleCode}`
                : "";
              addMessage("bot", `${topic.topic}\n\n${topic.concept}${codePart}`);
              setHelpMode(false);
              setHelpPage(0);
            }}
            className="block w-full rounded-lg border border-blue-500/60 bg-linear-to-tr from-blue-500/25 to-pink-500/35 px-3 py-2 text-left text-[13px] font-semibold text-slate-50"
          >
            {start + idx + 1}. {topic.topic}
          </button>
        ))}

        <div className="mt-2 flex justify-between">
          <button
            onClick={() => setHelpPage((p) => Math.max(p - 1, 0))}
            disabled={helpPage === 0}
            className={`rounded-full px-3 py-1 text-xs text-slate-200 ${
              helpPage === 0
                ? "cursor-default bg-slate-800"
                : "cursor-pointer bg-sky-500"
            }`}
          >
            ← Prev
          </button>
          <button
            onClick={() =>
              setHelpPage((p) =>
                p + 1 < Math.ceil(datasetJson.data.length / ITEMS_PER_PAGE)
                  ? p + 1
                  : p
              )
            }
            disabled={
              helpPage + 1 >= Math.ceil(datasetJson.data.length / ITEMS_PER_PAGE)
            }
            className={`rounded-full px-3 py-1 text-xs text-slate-200 ${
              helpPage + 1 >=
              Math.ceil(datasetJson.data.length / ITEMS_PER_PAGE)
                ? "cursor-default bg-slate-800"
                : "cursor-pointer bg-pink-500"
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    );
  };

  const handleAsk = () => {
    const question = input.toLowerCase().trim();
    if (!question) return;

    addMessage("user", input);

    if (question === "help") {
      setHelpMode(true);
      setHelpPage(0);
      addMessage(
        "bot",
        "Here are all available Python concepts. Click a topic button to view the concept."
      );
    } else if (helpMode) {
      const num = parseInt(question);
      if (!isNaN(num) && num >= 1 && num <= datasetJson.data.length) {
        const topic = datasetJson.data[num - 1];
        const codePart = topic.exampleCode
          ? `\n\nExample code:\n${topic.exampleCode}`
          : "";
        addMessage("bot", `${topic.topic}\n\n${topic.concept}${codePart}`);
        setHelpMode(false);
        setHelpPage(0);
      } else {
        const found = datasetJson.data.find((t) =>
          t.keywords.some((k) => question.includes(k.toLowerCase()))
        );
        if (found) {
          const codePart = found.exampleCode
            ? `\n\nExample code:\n${found.exampleCode}`
            : "";
          addMessage(
            "bot",
            `Topic: ${found.topic}\n\n${found.concept}${codePart}`
          );
        } else {
          addMessage(
            "bot",
            "Sorry, I didn't understand. Try another question or type 'help'."
          );
        }
        setHelpMode(false);
      }
    } else {
      const found = datasetJson.data.find((t) =>
        t.keywords.some((k) => question.includes(k.toLowerCase()))
      );
      if (found) {
        const codePart = found.exampleCode
          ? `\n\nExample code:\n${found.exampleCode}`
          : "";
        addMessage(
          "bot",
          `Topic: ${found.topic}\n\n${found.concept}${codePart}`
        );
      } else {
        addMessage(
          "bot",
          "Sorry, I didn't find an answer. Try again or type 'help'."
        );
      }
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top_left,#1e293b_0,#020617_40%,#020617_100%)] font-sans text-slate-50">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-slate-900 bg-slate-900/90 px-4 md:px-8 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-tr from-sky-500 to-pink-500 text-lg font-extrabold">
            FL
          </div>
          <span className="text-base font-bold md:text-lg">
            FlixerLearn Python Bot
          </span>
        </div>
        <div className="ml-4 mr-auto hidden max-w-md flex-1 items-center rounded-full border border-slate-500/40 bg-slate-950 px-3 sm:flex">
          {/* reserved search bar */}
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col gap-8 px-4 py-6 md:px-10 md:py-8">
        {/* Hero row */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="inline-flex rounded-full bg-linear-to-r from-indigo-600 via-pink-500 to-cyan-400 px-3 py-1 text-[11px] font-semibold">
              Featured Tool #1
            </div>
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              Python Bot Support Tool
            </h1>
            <div className="mt-2 h-[3px] w-40 rounded-full bg-linear-to-r from-cyan-400 via-indigo-600 to-pink-500" />
            <p className="mt-2 text-sm text-red-400 md:text-base">
              Now The Bot is under development. You can get the answers in the basic level we are working on it.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-400 bg-[radial-gradient(circle_at_30%_0,#22d3ee,#0f172a_60%)] text-3xl md:h-20 md:w-20">
              🤖
            </div>
            <div>
              <div className="text-sm font-semibold md:text-base">
                Python Tutor
              </div>
              <div className="text-xs text-slate-400 md:text-sm">
                Ask anything about your Python syllabus.
              </div>
            </div>
          </div>
        </div>

        {/* Chat card */}
        <div className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/95 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.9)] md:p-6">
          {/* Messages */}
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto pr-1">
            {chatHistory.map((msg, i) => {
              const isUser = msg.sender === "user";
              return (
                <div
                  key={i}
                  className={`flex ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed md:max-w-[70%] ${
                      isUser
                        ? "border border-zinc-200/30 bg-linear-to-tr from-indigo-600 to-pink-500 text-slate-50 shadow-[0_8px_24px_rgba(236,72,153,0.4)]"
                        : "border border-slate-400/35 bg-slate-900 text-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.8)]"
                    }`}
                  >
                    {msg.text}
                    {msg.text.includes(
                      "Here are all available Python concepts"
                    ) && renderHelpPage()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input bar */}
          <div className="mt-4 flex items-center gap-3 border-t border-indigo-800/70 pt-3">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-cyan-400 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.25),rgba(15,23,42,0.95))] px-4 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
              />
            </div>
            <button
              onClick={handleAsk}
              className="flex h-10 w-10 items-center justify-center rounded-full border-none bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#4f46e5,#ec4899,#22d3ee)] text-lg text-white shadow-[0_10px_25px_rgba(56,189,248,0.4)]"
            >
              ➤
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pythonbot;
