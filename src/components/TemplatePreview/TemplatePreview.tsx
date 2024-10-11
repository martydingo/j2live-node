"use client";

import shiki_halcyon from "@/styles/themes/shiki-halcyon";
// import { Textarea } from "@mantine/core";
import { Editor } from "@monaco-editor/react";
import { shikiToMonaco } from "@shikijs/monaco";
import flourite from "flourite";
import { useRef } from "react";
import { createHighlighter, ThemeRegistration } from "shiki";

export default function TemplatePreview({
  // errorState,
  generatedTemplate,
}: {
  errorState: string;
  generatedTemplate: string;
}) {
  const editorRef = useRef(null);
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  function handleEditorDidMount(editor: any, monaco: any) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor;
    monaco.languages.register({ id: "c" });
    monaco.languages.register({ id: "dockerfile" });
    monaco.languages.register({ id: "javascript" });
    monaco.languages.register({ id: "pascal" });
    monaco.languages.register({ id: "sql" });
    monaco.languages.register({ id: "c++" });
    monaco.languages.register({ id: "elixir" });
    monaco.languages.register({ id: "julia" });
    monaco.languages.register({ id: "php" });
    monaco.languages.register({ id: "yaml" });
    monaco.languages.register({ id: "c#" });
    monaco.languages.register({ id: "go" });
    monaco.languages.register({ id: "kotlin" });
    monaco.languages.register({ id: "python" });
    monaco.languages.register({ id: "typescript" });
    monaco.languages.register({ id: "clojure" });
    monaco.languages.register({ id: "html" });
    monaco.languages.register({ id: "lua" });
    monaco.languages.register({ id: "ruby" });
    monaco.languages.register({ id: "css" });
    monaco.languages.register({ id: "java" });
    monaco.languages.register({ id: "markdown" });
    monaco.languages.register({ id: "rust" });
    const highlighter = createHighlighter({
      themes: [shiki_halcyon] as ThemeRegistration[],
      langs: [
        "c",
        "dockerfile",
        "javascript",
        "pascal",
        "sql",
        "c++",
        "elixir",
        "julia",
        "php",
        "yaml",
        "c#",
        "go",
        "kotlin",
        "python",
        "typescript",
        "clojure",
        "html",
        "lua",
        "ruby",
        "css",
        "java",
        "markdown",
        "rust",
      ],
    });

    editor.updateOptions({
      fontSize: 14,
      readOnly: true,
    });

    Promise.all([highlighter]).then(([highlighter]) => {
      shikiToMonaco(highlighter, monaco);
    });
  }

  const codeLanguageMeta = flourite(generatedTemplate);
  console.log(codeLanguageMeta.language);

  return (
    <>
      {/* <Textarea
        id="TemplatePreview"
        inputWrapperOrder={["label", "description", "error", "input"]}
        label="Generated Template"
        description="The generated output below will automatically update when tweaking values on the left-hand side"
        style={{
          textWrap: "pretty",
          height: "100%",
          width: "90%",
          textAlign: "end",
        }}
        minRows={
          ((errorState == "false" || errorState === undefined) && 38) ||
          34.5 - (Math.max(errorState.length / 90, 0) - 2)
        }
        autosize
        error={errorState || false}
        size="md"
        value={generatedTemplate}
        disabled
      /> */}
      <label
        className="m_8fdc1311 mantine-InputWrapper-label mantine-Textarea-label"
        data-size="md"
        id="TemplatePreview-label"
      >
        Generated Template
      </label>
      <p
        className="TemplatePreview m_fe47ce59 mantine-InputWrapper-description mantine-Textarea-description"
        data-size="md"
        id="TemplatePreview-description"
      >
        The generated output below will automatically update when tweaking
        values on the left-hand side
      </p>
      <Editor
        height={window.visualViewport!.height}
        onMount={handleEditorDidMount}
        value={generatedTemplate}
        language={codeLanguageMeta.language.toLowerCase()}
        // defaultLanguage="yaml"
      />
    </>
  );
}
