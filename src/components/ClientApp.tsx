"use client";

if (window === undefined) exit();

import { AppShell, Flex, TypographyStylesProvider } from "@mantine/core";
import YAMLEditor from "./Editors/YAMLEditor/YAMLEditor";
import JinjaEditor from "./Editors/JinjaEditor/JinjaEditor";
import { useState } from "react";
import { renderTemplate } from "@/lib/renderTemplate";
import { exit } from "process";
import TemplatePreview from "./TemplatePreview/TemplatePreview";

export default function ClientApp() {
  const [errorState, setErrorState] = useState("");
  const [editorData, setEditorData] = useState({
    YAMLEditor: "",
    JinjaEditor: "",
  });

  async function handleEditorChange(editorName: string, editorContent: string) {
    console.log(`${editorName}: ${editorContent}`);

    setEditorData((prevState) => ({
      ...prevState,
      [editorName]: editorContent,
    }));

    let generateTemplatePromise: Promise<{ error: boolean; message: string; }>
    if (editorName === "YAMLEditor") {
      generateTemplatePromise = renderTemplate(
        editorContent,
        editorData.JinjaEditor
      );
    } else {
      generateTemplatePromise = renderTemplate(
        editorData.YAMLEditor,
        editorContent
      );
    }
    const outputElement = document.getElementById("TemplatePreview");
    console.log(outputElement)

    Promise.all([generateTemplatePromise]).then(([generatedTemplate]) => {
      if (generatedTemplate.error == false) {
        setErrorState(generatedTemplate.error as unknown as string);
      } else {
        setErrorState(
          generatedTemplate.message.toString() as unknown as string
        );
      }
      outputElement!.innerText = generatedTemplate.message as unknown as string;
      console.log(generatedTemplate);
    });
  }

  return (
    <AppShell.Main>
      <TypographyStylesProvider>
        <Flex
          direction="row"
          justify="center"
          style={{ width: "100%", height: "100%" }}
        >
          <Flex
            direction="column"
            style={{
              width: "100%",
              height: "100%",
              padding: "1em",
              maxWidth: "49vw",
              maxHeight: "90vh",
            }}
            align="start"
          >
            <YAMLEditor
              editorData={editorData}
              handleEditorChange={handleEditorChange}
            />
            <div
              style={{
                marginTop: "0.5em",
                marginBottom: "0.5em",
                width: "100%",
              }}
            />
            <JinjaEditor
              editorData={editorData}
              handleEditorChange={handleEditorChange}
            />
          </Flex>
          <Flex
            direction="column"
            justify="center"
            align="end"
            style={{
              width: "100%",
              height: "100%",
              padding: "1em",
              maxWidth: "49vw",
              maxHeight: "90vh",
            }}
          >
            <TemplatePreview errorState={errorState} />
          </Flex>
        </Flex>
      </TypographyStylesProvider>
    </AppShell.Main>
  );
}
