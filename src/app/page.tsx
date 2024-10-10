import {
  AppShell,
} from "@mantine/core";
import NavHeader from "@/components/Navigation/NavHeader";
import NavFooter from "@/components/Navigation/NavFooter";
// import ClientApp from "@/components/ClientApp";

import dynamic from 'next/dynamic'
 
const ClientApp = dynamic(
  () => import('@/components/ClientApp'),
  { ssr: false }
)
 

export default function App() {
  // const [errorState, setErrorState] = useState("");

  // const handleEditorChange = (editorContent: string, editorName: string) => {
  //   const outputElement = document.getElementById("TemplatePreview");
  //   let generateTemplatePromise;

  //   setEditorData((prevState) => ({
  //     ...prevState,
  //     [editorName]: editorContent,
  //   }));

  //   if (editorName === "YAMLEditor") {
  //     generateTemplatePromise = renderTemplate(
  //       editorContent,
  //       editorData.JinjaEditor
  //     );
  //   } else {
  //     generateTemplatePromise = renderTemplate(
  //       editorData.YAMLEditor,
  //       editorContent
  //     );
  //   }

  //   Promise.all([generateTemplatePromise]).then(
  //     ([templateGeneratorResponse]) => {
  //       if (templateGeneratorResponse.error == false) {
  //         setErrorState(templateGeneratorResponse.error as unknown as string);
  //       } else {
  //         setErrorState(
  //           templateGeneratorResponse.message.toString() as unknown as string
  //         );
  //       }
  //       outputElement!.innerHTML =
  //         templateGeneratorResponse.message as unknown as string;
  //     }
  //   );
  // };

  return (
      <AppShell header={{ height: "2em" }} withBorder={false} padding="2em">
        <NavHeader />
        <ClientApp />
        <NavFooter />
      </AppShell>
  );
}
