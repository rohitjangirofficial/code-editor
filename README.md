# Code Editor (Next.js 14 & TypeScript)

This is a code editor built with **Next.js 14** and **TypeScript**. The editor uses **CodeMirror** for code editing, **Tailwind CSS** for styling, and offers support for switching between **dark** and **light** themes.

## Features

- **CodeMirror** as the editor: A versatile and powerful code editor with support for a variety of programming languages.
- **Syntax Highlighting**: Syntax highlighting is supported for several programming languages.
  - *Note*: Some programming languages like **TypeScript**, **PHP**, **Swift**, and **Rust** do not have extensions in CodeMirror, so syntax highlighting might not work for them.
- **Theme Switcher**: You can switch between **dark** and **light** themes to suit your preference.

## Technologies Used

- **Next.js 14**: For building the application.
- **TypeScript**: To ensure type safety and better code maintainability.
- **CodeMirror**: The code editor used for syntax highlighting and editing features.
- **Tailwind CSS**: For responsive and utility-first CSS styling.

## Installation

To run this project locally, follow the steps below:

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:
    ```bash
    cd <project-directory>
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Code Editing**: Simply start typing in the editor. It supports syntax highlighting for multiple languages (excluding the ones mentioned above).
2. **Theme Switching**: You can toggle between **dark** and **light** themes by using the theme switcher in the UI.

## Limitations

- **Syntax Highlighting**: The syntax highlighting feature doesn't work perfectly for all languages. Specifically, **TypeScript**, **PHP**, **Swift**, and **Rust** do not have extensions available in **CodeMirror** for proper syntax highlighting.
  
## Future Improvements

- Adding more extensions to support additional programming languages.
- Enhancing the editor with features like autocompletion, error detection, and code formatting.