"use client";

import React, { useCallback, useState } from "react";

//Languages Icons
import "devicon/devicon.min.css";

import Output from "./components/Output";
import Editor from "./components/Editor";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "./context/ThemeContext";

export interface LanguageTemplateType {
  icon: string;
  value: string;
  fileName: string;
  boilerplate: string;
  version?: string;
}

function Home() {
  const languageTemplates: LanguageTemplateType[] = [
    {
      icon: "devicon-python-plain",
      value: "python",
      fileName: "main.py", // file name instead of extension
      boilerplate: `# Hello, World in Python
print("Hello, World!")`,
      version: "3.10.0",
    },
    {
      icon: "devicon-javascript-plain",
      value: "javascript",
      fileName: "index.js", // file name instead of extension
      boilerplate: `// Hello, World in JavaScript
console.log("Hello, World!");`,
      version: "18.15.0",
    },
    {
      icon: "devicon-typescript-plain",
      value: "typescript",
      fileName: "index.ts", // file name instead of extension
      boilerplate: `// Hello, World in TypeScript
console.log("Hello, World!");`,
      version: "5.0.3",
    },
    {
      icon: "devicon-java-plain",
      value: "java",
      fileName: "Main.java", // file name instead of extension
      boilerplate: `// Hello, World in Java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
      version: "15.0.2",
    },
    {
      icon: "devicon-go-plain",
      value: "go",
      fileName: "main.go", // file name instead of extension
      boilerplate: `// Hello, World in Go
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}`,
      version: "1.16.2",
    },
    {
      icon: "devicon-php-plain",
      value: "php",
      fileName: "index.php", // file name instead of extension
      boilerplate: `<?php
// Hello, World in PHP
echo "Hello, World!";
?>
`,
      version: "8.2.3",
    },
    {
      icon: "devicon-swift-plain",
      value: "swift",
      fileName: "main.swift", // file name instead of extension
      boilerplate: `// Hello, World in Swift
import Swift

print("Hello, World!")
`,
      version: "5.3.3",
    },
    {
      icon: "devicon-rust-plain",
      value: "rust",
      fileName: "main.rs", // file name instead of extension
      boilerplate: `// Hello, World in Rust
fn main() {
    println!("Hello, World!");
}`,
      version: "1.68.2",
    },
    {
      icon: "devicon-cplusplus-plain",
      value: "c++",
      fileName: "main.cpp", // file name instead of extension
      boilerplate: `// Hello, World in C++
#include <iostream>

using namespace std;

int main() {
  cout << "Hello, World!" << endl;
  return 0;
}`,
      version: "10.2.0",
    },
  ];

  const { theme, toggleTheme } = useTheme();

  const [code, setCode] = useState<string>(languageTemplates[0].boilerplate);

  const [output, setOutput] = useState<string | null>(null);

  const [currentLanguage, setCurrentLanguage] = useState<LanguageTemplateType>(
    languageTemplates[0]
  );
  const [fileName, setFileName] = useState<string>("main.py");

  const onChange = useCallback((val: string) => {
    setCode(val);
  }, []);

  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex h-[75px] flex-row md:flex-col justify-between items-center gap-2 overflow-x-auto border-r-2 border-neutral-500 bg-neutral-700 p-2 md:h-screen md:min-w-[75px]">
        <div className="flex h-full md:h-auto flex-row items-center gap-2 overflow-x-auto w-full md:flex-col">
          {languageTemplates.map((language) => (
            <button
              key={language.value}
              onClick={() => {
                // setCurrentLanguage(language.value);
                setCurrentLanguage(language);

                setFileName(language.fileName);
                setCode(language.boilerplate);
              }}
              className={`${
                language.value === currentLanguage.value ? "bg-blue-600" : ""
              } flex aspect-square h-full items-center justify-center rounded-[4px] border-2 border-neutral-500 md:h-auto md:w-full`}
            >
              <i className={`${language.icon} text-3xl text-white`}></i>
            </button>
          ))}
        </div>
        <div className="h-full md:h-auto md:w-full">
          <button
            onClick={toggleTheme}
            className="flex aspect-square h-full items-center justify-center rounded-[4px] border-2 border-neutral-500 md:h-auto md:w-full"
          >
            {theme === "dark" ? (
              <Sun className="text-3xl text-white" />
            ) : (
              <Moon className="text-3xl text-white" />
            )}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 flex-col md:grid-cols-2 md:h-screen w-full">
        <Editor
          fileName={fileName}
          code={code}
          onChange={onChange}
          currentLanguage={currentLanguage}
          setOutput={setOutput}
        />
        <Output output={output} setOutput={setOutput} />
      </div>
    </section>
  );
}
export default Home;
