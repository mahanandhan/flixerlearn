import React, { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;

    setIsLoading(true);
    setIsError(false);
    setOutput(null);

    try {
      const response = await executeCode(language, sourceCode, inputValue);
      const result = response.run;

      if (result.stderr) {
        setIsError(true);
        setOutput(result.stderr.split("\n"));
      } else {
        setOutput(result.output.split("\n"));
      }
    } catch (err) {
      setIsError(true);
      setOutput([err.message || "Something went wrong"]);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 text-base font-semibold text-slate-200">Output</div>

      {/* Input */}
      <div className="mb-3 text-sm text-slate-200">
        <div className="mb-1">Input:</div>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter input here..."
          className="h-24 w-full resize-none rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-sm text-slate-100 outline-none placeholder:text-slate-500"
        />
      </div>

      {/* Run button */}
      <button
        onClick={runCode}
        disabled={isLoading}
        className={`mb-3 inline-flex w-max items-center rounded-md border px-3 py-1 text-sm font-semibold ${
          isLoading
            ? "cursor-not-allowed border-emerald-500/40 text-emerald-500/60"
            : "cursor-pointer border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
        }`}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>

      {/* Output box */}
      <div
        className={`flex-1 overflow-y-auto rounded-md border px-2 py-2 text-sm ${
          isError
            ? "border-rose-500/70 text-rose-400"
            : "border-slate-700 text-slate-100"
        } bg-slate-950`}
      >
        {output
          ? output.map((line, i) => <div key={i}>{line}</div>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
