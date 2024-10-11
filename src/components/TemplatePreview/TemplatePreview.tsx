"use client";

import shiki_halcyon from "@/styles/themes/shiki-halcyon";
// import { Textarea } from "@mantine/core";
import { Editor } from "@monaco-editor/react";
import { shikiToMonaco } from "@shikijs/monaco";
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
    monaco.languages.register({ id: "yaml" });
    const highlighter = createHighlighter({
      themes: [shiki_halcyon] as ThemeRegistration[],
      langs: ["yaml"],
    });

    editor.updateOptions({
      fontSize: 14,
      readOnly: true
    });

    Promise.all([highlighter]).then(([highlighter]) => {
      shikiToMonaco(highlighter, monaco);
    });
    
  }
  console.log(generatedTemplate)
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
        // defaultLanguage="yaml"
      />
    </>
  );
}
