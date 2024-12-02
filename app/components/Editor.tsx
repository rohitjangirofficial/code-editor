"use client";
import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { rust } from "@codemirror/lang-rust";
import { go } from "@codemirror/lang-go";
import { cpp } from "@codemirror/lang-cpp";
import { dracula, githubLight } from "@uiw/codemirror-themes-all";
import { StreamLanguage } from "@codemirror/language";

import axios from "axios";

//Languages Icons
import "devicon/devicon.min.css";
import { LanguageTemplateType } from "../page";
import { useTheme } from "../context/ThemeContext";

interface LanguageExtensions {
  javascript: ReturnType<typeof javascript>;
  python: ReturnType<typeof python>;
  java: ReturnType<typeof java>;
  rust: ReturnType<typeof rust>;
  cpp: ReturnType<typeof cpp>;
  go: ReturnType<typeof go>;
}

const Editor = ({
  fileName,
  code,
  onChange,
  currentLanguage,
  setOutput,
}: {
  fileName: string;
  code: string;
  onChange: (val: string) => void;
  currentLanguage: LanguageTemplateType;
  setOutput: (output: string | null) => void;
}) => {
  const textMode = StreamLanguage.define({
    startState: () => ({}),
    token: (stream) => {
      stream.next();
      return null; // Return null to indicate plain text
    },
  });

  const { theme } = useTheme();

  const [compiling, setCompiling] = useState<boolean>(false);

  const languageExtensions: LanguageExtensions = {
    javascript: javascript(),
    python: python(),
    java: java(),
    rust: rust(),
    cpp: cpp(),
    go: go(),
  };

  const getLanguageExtension = (language: keyof LanguageExtensions) => {
    console.log("getLang Claled...");
    return languageExtensions[language] || textMode; // fallback to text mode
  };

  const runCode = async () => {
    try {
      setCompiling(true);
      const { data } = await axios.post("/api/compile", {
        code,
        language: currentLanguage.value,
        version: currentLanguage.version,
      });
      setOutput(data.data.run.output);
    } catch (error) {
      throw error;
    } finally {
      setCompiling(false);
    }
  };

  return (
    <div className="h-[calc(50vh-37.5px)] md:h-full md:mb-0 overflow-x-auto">
      <div className="relative flex h-[60px] items-center justify-between bg-neutral-700 pr-4">
        <div>
          <p className="absolute top-0 flex h-[65px] items-center justify-center border-r-2 border-t-2 border-neutral-500 bg-[#282a36] px-8 font-semibold text-white">
            {fileName[0].toUpperCase() + fileName.slice(1)}
          </p>
        </div>
        <div>
          <button
            onClick={runCode}
            disabled={compiling}
            className={`h-full rounded-[4px] bg-blue-600 px-8 py-2 font-semibold text-white transition-all hover:bg-blue-600/80 ${
              compiling ? "opacity-50" : ""
            }`}
          >
            {compiling ? "Compiling..." : "Run"}
          </button>
        </div>
      </div>
      <CodeMirror
        value={code}
        height="100%"
        width="100%"
        className="text-md h-[calc(100%-60px)] w-full border-t-2 border-neutral-500"
        theme={theme === "light" ? githubLight : dracula}
        extensions={[
          getLanguageExtension(
            currentLanguage.value as keyof LanguageExtensions
          ),
        ]}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
