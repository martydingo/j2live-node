export async function renderTemplate(
    yamlVariables: string,
    JinjaTemplate: string
  ): Promise<{ error: boolean; message: string }> {
    try {
      const postRequest = await fetch("/api", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          YAML: yamlVariables,
          Jinja: JinjaTemplate,
        }),
        mode: "cors",
      });
      const postResponse: { error: boolean; message: string } =
        await postRequest.json();
  
      return {
        error: postResponse["error"],
        message: postResponse["message"],
      };
    } catch (err) {
      const errorMsg = err as string;
      return {
        error: true,
        message: errorMsg,
      };
    }
  }