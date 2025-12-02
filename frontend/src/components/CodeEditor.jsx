import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "../components/LanguageSelector";
import Output from "../components/Output";
import { CODE_SNIPPETS } from "../constants";

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (lang) => {
    setLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);
  };

  const handleChange = (val) => {
    setValue(val || "");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1e293b_0,#020617_45%,#020617_100%)] text-slate-50 flex items-center justify-center px-4 py-6 md:px-10">
      {/* big compiler card */}
      <div className="w-full max-w-6xl rounded-3xl border border-cyan-400/40 bg-slate-900/95 shadow-[0_24px_90px_rgba(15,23,42,0.95)] p-4 md:p-6">
        {/* small header like in the image */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
            <span className="ml-3 text-xs font-semibold text-slate-400">
              Online Compiler
            </span>
          </div>
          <div className="hidden text-xs text-slate-400 md:block">
            FlixerLearn • Tech Compiler
          </div>
        </div>

        {/* editor + output */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* LEFT: editor */}
          <div className="flex-1 rounded-2xl border border-slate-500/40 bg-slate-950/90 p-3 md:p-4">
            <LanguageSelector language={language} onSelect={onSelect} />
            <div className="mt-2 h-[55vh] md:h-[65vh]">
              <Editor
                height="100%"
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                value={value}
                onChange={handleChange}
                onMount={onMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  wordWrap: "on",
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  theme: "vs-dark",
                  roundedSelection: true,
                }}
              />
            </div>
          </div>

          {/* RIGHT: output */}
          <div className="flex-1 rounded-2xl border border-slate-500/40 bg-slate-950/90 p-3 md:p-4">
            <Output editorRef={editorRef} language={language} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
