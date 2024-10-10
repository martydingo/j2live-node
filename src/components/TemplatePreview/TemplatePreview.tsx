"use client";

import { Textarea } from "@mantine/core";

export default function TemplatePreview({
  errorState,
  generatedTemplate
}: {
  errorState: string;
  generatedTemplate: string;
}) {
  return (
    <>
      <Textarea
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
      />
    </>
  );
}
