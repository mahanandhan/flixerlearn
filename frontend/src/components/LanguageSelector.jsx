import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "#4aa3ff";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="mb-3">
      <div className="mb-2 text-base font-semibold text-slate-200">
        Language
      </div>

      <div className="relative inline-block text-sm">
        <button
          type="button"
          className="flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 font-medium text-slate-100 shadow-sm hover:border-sky-500 focus:outline-none"
          onClick={(e) => {
            const menu = e.currentTarget.nextSibling;
            menu.style.display = menu.style.display === "block" ? "none" : "block";
          }}
        >
          {language} ▼
        </button>

      {/* dropdown */}
        <ul
          className="absolute z-50 mt-1 hidden min-w-[180px] rounded-md border border-slate-700 bg-slate-900 py-1 text-sm shadow-lg"
        >
          {languages.map(([lang, version]) => (
            <li
              key={lang}
              onClick={() => {
                onSelect(lang);
                document.activeElement.blur();
              }}
              className={`flex cursor-pointer items-center justify-between px-3 py-2 transition-colors ${
                lang === language ? "bg-slate-800 text-sky-400" : "text-slate-200"
              } hover:bg-slate-800`}
            >
              <span>{lang}</span>
              <span className="text-xs text-slate-500">({version})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;
