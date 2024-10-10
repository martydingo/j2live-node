"use client";

import "@mantine/code-highlight/styles.css";
export default function TemplatePreview() {
  return (
    <>
      <label
        className="m_8fdc1311 mantine-InputWrapper-label mantine-Textarea-label"
        data-size="md"
        id="TemplatePreview-label"
      >
        Generated Template{" "}
      </label>
      <p
        className="TemplatePreview m_fe47ce59 mantine-InputWrapper-description mantine-Textarea-description"
        data-size="md"
        id="TemplatePreview-description"
      >
        The generated output below will automatically update when tweaking
        values on the left-hand side
      </p>
    </>
  );
}
