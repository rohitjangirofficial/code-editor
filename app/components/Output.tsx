"use client";
import React from "react";

const Output = ({
  output,
  setOutput,
}: {
  output: string | null;
  setOutput: (output: string | null) => void;
}) => {
  return (
    <div className="h-[calc(50vh-37.5px)] md:h-full border-t-2 border-neutral-500 md:border-l-2">
      <div className="flex h-[60px] items-center justify-between bg-neutral-700 px-4">
        <div>
          <p className="flex items-center justify-center font-semibold text-white">
            Output
          </p>
        </div>
        <div>
          <button
            onClick={() => setOutput("Console cleared!")}
            className="h-full rounded-[4px] border-2 border-neutral-500 bg-neutral-700 px-8 py-2 font-semibold text-white transition-all hover:bg-neutral-600/80"
          >
            Clear
          </button>
        </div>
      </div>
      <div
        id="output-container"
        className="h-[calc(100%-60px)] overflow-auto dark:text-white text-black dark:bg-[#282a36] bg-white px-2"
      >
        {output ? (
          <pre>{output}</pre>
        ) : (
          <p className="text-gray-400">
            No output yet! Write some code and click &apos;Run&apos; to see the
            results.
          </p>
        )}
      </div>
    </div>
  );
};

export default Output;
